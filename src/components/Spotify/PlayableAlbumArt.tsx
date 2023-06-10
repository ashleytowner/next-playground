import { Play } from 'lucide-react';
import './PlayableAlbumArt.scss';

/* eslint-disable @next/next/no-img-element */
type PlayableAlbumArtProps = {
  src: string;
  url: string;
};

export default function PlayableAlbumArt({ src, url }: PlayableAlbumArtProps) {
  return (
    <div className="playable-album-art">
      <a href={url}>
        <div className="icon">
          <Play />
        </div>
        <img src={src} alt="Album Art" width={50} />
      </a>
    </div>
  );
}
