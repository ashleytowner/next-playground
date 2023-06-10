import querystring from 'querystring';

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
    redirect_uri: `${process.env.BASE_URL}/spotify/callback`,
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
      redirect_uri: `${process.env.BASE_URL}/spotify/callback`
    }),
  });

  return [response.status, await response.json()] as const;
}
