import { z } from "zod";

export const authSchema = z.object({
  access_token: z.string(),
  token_type: z.literal('Bearer'),
  expires_in: z.number(),
  refresh_token: z.string(),
});

export const spotifyImage = z.object({
  height: z.number(),
  url: z.string(),
  width: z.number(),
});

export const spotifyArtist = z.object({
  external_urls: z.object({
    spotify: z.string()
  }),
  href: z.string(),
  id: z.string(),
  name: z.string(),
  type: z.string(),
  uri: z.string()
});

export const spotifyAlbum = z.object({
  album_type: z.string(),
  artists: z.array(spotifyArtist),
  available_markets: z.array(z.string()),
  external_urls: z.object({
    spotify: z.string()
  }),
  href: z.string(),
  id: z.string(),
  images: z.array(spotifyImage),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.string(),
  total_tracks: z.number(),
  type: z.string(),
  uri: z.string()
});

export const spotifyTrack = z.object({
  album: spotifyAlbum,
  artists: z.array(spotifyArtist),
  available_markets: z.array(z.string()),
  disc_number: z.number(),
  duration_ms: z.number(),
  explicit: z.boolean(),
  external_ids: z.object({
    isrc: z.string()
  }),
  external_urls: z.object({
    spotify: z.string()
  }),
  href: z.string(),
  id: z.string(),
  is_local: z.boolean(),
  name: z.string(),
  popularity: z.number(),
  preview_url: z.string().nullable(),
  track_number: z.number(),
  type: z.string(),
  uri: z.string()
});
