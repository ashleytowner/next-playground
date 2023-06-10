import querystring from 'querystring';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

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
    redirect_uri: 'http://localhost:3000/spotify/callback',
    scope: scopes.join(' '),
  });
  return `${authorizeEndpoint}?${parameters.toString()}`;
}

export async function getAccessToken() {
  console.log('refresh token:', refreshToken);
  const response = await fetch(TOKEN_ENDPOINT, {
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

  return await response.json() as { 
    access_token: string;
    expires_in: number;
    token_type: 'Bearer';
    scope: string;
  };
}

const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';

export async function getTopTracks() {
  const x = await getAccessToken();
  const access_token = x.access_token;
  console.log('access token', x);

  const result = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return await result.json();
}
