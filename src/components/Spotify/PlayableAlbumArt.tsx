import { Play } from 'lucide-react';
import './PlayableAlbumArt.scss';

/* eslint-disable @next/next/no-img-element */
type PlayableAlbumArtProps = {
	src: string;
	url: string;
	className?: string;
};

export default function PlayableAlbumArt({ src, url, className }: PlayableAlbumArtProps) {
	return (
		<div className={`playable-album-art m-2 relative${className ? ` ${className}` : ''}`}>
			<a href={url} target="_blank">
				<div className="icon absolute inset-0 opacity-0 hover:opacity-100 flex items-center justify-center bg-shade">
					<Play />
				</div>
				<img src={src} alt="Album Art" className="w-16 m-0" />
			</a>
		</div>
	);
}
