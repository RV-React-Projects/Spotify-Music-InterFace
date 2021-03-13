import React from 'react';
import { useParams } from 'react-router-dom';

function PlaylistPages() {
	let { id } = useParams();
	return (
		<div className="playlistPage">
			<div className="mainInner">
				<div className="playlistInfo">
					<div className="playlistImage">
						<img
							src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
							alt="Playlist info"
						/>
					</div>
					<h1>Title</h1>
					<span>spotify</span>
					<br />
					<button>Play</button>
					<div className="Twoicons">
						<div className="iconHeart" />
						<div className="iconDot" />
					</div>
					<p>
						<span className="description">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A in obcaecati culpa laboriosam, error aspernatur!
						</span>
					</p>
					<span>Total songs</span>
				</div>
				<div className="PlaylistSongs">
					<ul>
						<li>song 1</li>
						<li>song 2</li>
						<li>song 3</li>
						<li>song 4</li>
						<li>song 5</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default PlaylistPages;
