import querystring from 'querystring';
import { authSchema, authSchemaWithExpiry } from './zod/spotify';
import { ZodError } from 'zod';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

type SpotifyScope =
  | 'ugc-image-upload'
  | 'user-read-playback-state'
  | 'user-modify-playback-state'
  | 'user-read-currently-playing'
  | 'app-remote-control'
  | 'streaming'
  | 'playlist-read-private'
  | 'playlist-read-collaborative'
  | 'playlist-modify-private'
  | 'playlist-modify-public'
  | 'user-follow-modify'
  | 'user-follow-read'
  | 'user-read-playback-position'
  | 'user-top-read'
  | 'user-read-recently-played'
  | 'user-library-modify'
  | 'user-library-read'
  | 'user-read-email'
  | 'user-read-private'
  | 'user-soa-link'
  | 'user-soa-unlink'
  | 'user-manage-entitlements'
  | 'user-manage-partner'
  | 'user-create-partner';

export function getAuthorizationURL() {
  const authorizeEndpoint = 'https://accounts.spotify.com/authorize';
  const scopes: SpotifyScope[] = [
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-top-read',
    'user-read-recently-played',
    'user-library-read',
  ];
  if (typeof clientId === 'undefined') {
    throw new Error('SPOTIFY_CLIENT_ID must be set');
  }
  const parameters = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/spotify/callback`,
    scope: scopes.join(' '),
  });
  return `${authorizeEndpoint}?${parameters.toString()}`;
}

export async function getRefreshToken(code: string) {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'authorization_code',
      code,
      redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/spotify/callback`,
    }),
  });

  return [response.status, await response.json()] as const;
}

export async function refresh(refreshToken: string) {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  return [response.status, await response.json()] as const;
}

export async function getToken() {
  if (localStorage) {
    const authData = localStorage.getItem('sfy_access_token');
    if (authData === null) {
      return undefined;
    }
    try {
      const parsedAuthData = authSchemaWithExpiry.parse(JSON.parse(authData));

      if (parsedAuthData.exp < Date.now()) {
        const [status, newAuthData] = await refresh(
          parsedAuthData.refresh_token
        );
        if (status >= 200 && status < 300) {
          const newParsedAuthData = authSchema.parse(newAuthData);
          const authDataWithExp = {
            ...newParsedAuthData,
            exp: newParsedAuthData.expires_in * 1000 + Date.now()
          }
          localStorage.setItem(
            'sfy_access_token',
            JSON.stringify(newParsedAuthData)
          );
          return authDataWithExp;
        } else {
          return undefined;
        }
      } else {
        return parsedAuthData;
      }
    } catch (e) {
      if (e instanceof ZodError) {
        console.error(e.errors);
      } else if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return undefined;
    }
  }
}
