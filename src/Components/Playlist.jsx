import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as PlayIcon } from '../Svgs/Play.svg';
function Playlist(props) {
	const DataPlaylist = [
		{
			id: 101,
			category_id: 1,
			name: 'Liked Songs🧡',
			img:
				'https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG11c2ljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
			desc: 'Song of Your Choice'
		},
		{
			id: 115,
			category_id: 1,
			name: 'Home Paylist 1',
			img:
				'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBzdHVkaW98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			desc: 'Song of Your Choice'
		},
		{
			id: 116,
			category_id: 1,
			name: 'Daily Mix 1',
			img: 'https://dailymix-images.scdn.co/v2/img/9b9643ab7444d6184d1b33e534cacc15c1e44186/1/en/default',
			desc: 'Pritam, Ritviz, Ved Sharma and more'
		},
		{
			id: 117,
			category_id: 1,
			name: 'Daily Mix 2',
			img: 'https://dailymix-images.scdn.co/v2/img/ab67616d0000b2739d5929475525df352e639bb3/2/en/default',
			desc: 'Shashi, Guru Randhawa, Arjun and more'
		},
		{
			id: 118,
			category_id: 1,
			name: 'Daily Mix 3',
			img: 'https://dailymix-images.scdn.co/v2/img/dff586d5432fac247af626065aafa0ddccd1bec7/3/en/default',
			desc: 'Ozuna, Maluma, Quimico Ultra Mega and more'
		},
		{
			id: 102,
			category_id: 1,
			name: 'Home Paylist 1',
			img:
				'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			desc: 'Your Recent'
		},
		{
			id: 103,
			category_id: 2,
			name: 'Top 50 - India',
			img: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg',
			desc: 'Your daily update of the most played tracks right now - India.'
		},
		{
			id: 104,
			category_id: 2,
			name: 'Top 50 - Global',
			img: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg',
			desc: 'Your daily update of the most played tracks right now - Global.'
		},
		{
			id: 111,
			category_id: 2,
			name: 'Hot Hits India',
			img: 'https://i.scdn.co/image/ab67706f00000002f38deeb058549ee1753ce9c9',
			desc: 'The hottest tracks in India. Cover: Justin Bieber'
		},
		{
			id: 112,
			category_id: 2,
			name: 'Top Hits - Tamil',
			img: 'https://i.scdn.co/image/ab67706f000000027f7859b084bbe3f98a5315ba',
			desc: 'Catch the top hits from Kollywood'
		},
		{
			id: 113,
			category_id: 2,
			name: 'Top 50 - Global',
			img: 'https://i.scdn.co/image/ab67706f00000002f185916a4a0a737d2ac0dc2c',
			desc: 'Tune into the hottest Hindi songs. Cover- Neha Kakkar'
		},
		{
			id: 119,
			category_id: 2,
			name: 'Top 50 - Panjabi',
			img: 'https://i.scdn.co/image/ab67706f00000002721742bfde0b12a2b74d2658',
			desc:
				'Catch the hottest Punjabi tracks with Karan Aujla & Dilpreet Dhillon on the cover for their track "Jatt Te Jawani".'
		},
		{
			id: 105,
			category_id: 3,
			name: 'Home Paylist 3',
			img:
				'https://images.unsplash.com/photo-1531058398365-38216c7b3ff5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGVhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
			desc: 'Top Music'
		},
		{
			id: 106,
			category_id: 3,
			name: 'Home Paylist 3',
			img:
				'https://images.unsplash.com/photo-1592966556928-5c4d163e8bd3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
			desc: 'Glorry Songs'
		},
		{
			id: 120,
			category_id: 3,
			name: 'Best of Arijit Singh',
			img: 'https://i.scdn.co/image/2ef89fc8ae47fcfd1c4efbdb4135ad6ba9b93fb1',
			desc: 'Best Songs all Mix of Arijit'
		},
		{
			id: 106,
			category_id: 3,
			name: 'Best of Neha Kakar',
			img: 'https://i.scdn.co/image/d9cf81f26581c55c3ef9aba1acc1332ee915c30a',
			desc: 'Best of Neha Kakar'
		},
		{
			id: 107,
			category_id: 4,
			name: 'Home Paylist 4',
			img:
				'https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cGVhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
			desc: "I don't know"
		},
		{
			id: 108,
			category_id: 4,
			name: 'Home Paylist 4',
			img:
				'https://images.unsplash.com/photo-1455642305367-68834a1da7ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
			desc: 'lorem10'
		},
		{
			id: 109,
			category_id: 5,
			name: 'Home Paylist 5',
			img:
				'https://images.unsplash.com/uploads/1413395496082cbc91228/43e39040?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
			desc: 'Go far with Music into Silence'
		},
		{
			id: 110,
			category_id: 5,
			name: 'Home Paylist 5',
			img:
				'https://images.unsplash.com/photo-1502159212845-f31a19546a5d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
			desc: 'all Around World'
		},
		{
			id: 121,
			category_id: 5,
			name: 'Lo-Fi Beats',
			img: 'https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e',
			desc: 'Beats to relax, study and focus.'
		},
		{
			id: 122,
			category_id: 5,
			name: 'Peaceful Piano',
			img: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
			desc: 'Relax and indulge with beautiful piano pieces'
		},
		{
			id: 123,
			category_id: 5,
			name: 'Instrumental Study',
			img: 'https://i.scdn.co/image/ab67706f000000025ec8c003898b36c6f73dfac7',
			desc: 'A soft musical backdrop for your studies.'
		}
	];
	const matchPlayList = DataPlaylist.filter((playlist) => playlist.category_id === props.category_id);
	return (
		// <a href="https://open.spotify.com/playlist/37i9dQZEVXbLZ52XmnySJg">
		<div className="chartContainer">
			{matchPlayList.map((list) => (
				<Link to={`/playlist/` + list.id}>
					<div key={list.id} className="card">
						<div className="cardImage">
							<a href="/">
								<span className="PlayIcon_Image2">
									<PlayIcon />
								</span>
							</a>
							<img src={list.img} alt="music2" />
						</div>
						<div className="cardContent">
							<h3>{list.name}</h3>
							<span>{list.desc}</span>
						</div>
					</div>
				</Link>
			))}
		</div>
		// </a>
	);
}

export default Playlist;
