"use client";
import Button from "../Button/Button";

type SpotifyAuthProps = {
  url: string;
}

export default function SpotifyAuth({ url }: SpotifyAuthProps) {
  const handleClick = () => {
    window.location.href = url;
  }
  if (!localStorage.getItem('spotify_auth')) {
    return <Button variant="primary" onClick={handleClick}>Sign In With Spotify</Button>;
  }
  return null;
}
