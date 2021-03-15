import React from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as PlayIcon } from '../Svgs/Play.svg';
import { ReactComponent as Heart } from '../Svgs/Heart.svg';
import { ReactComponent as Dots } from '../Svgs/3dots.svg';
import { ReactComponent as Time } from '../Svgs/Time.svg';
import { ReactComponent as PlaySong } from '../Svgs/PlaySong.svg';

function PlaylistPages() {
	const ALLList = [
		{
			id: 1,
			img: 'https://i.scdn.co/image/ab67616d000048510bf17c0c9dc828e68794a66b',
			title: 'Har Funn Maula (From Koi Jaane Na)',
			titledesc: 'Tanishk Bagchi',
			albumdesc: 'Har Funn Maula (From Koi Jaane Na)',
			addDate: '4 days ago',
			time: '4:23'
		},
		{
			id: 2,
			img: 'https://i.scdn.co/image/ab67616d0000485169531a37a42d7a3740d2d118',
			title: 'Tum Se He (Reloded)',
			titledesc: 'Ankit Tiwari',
			albumdesc: 'Tum Se He (Reloded)',
			addDate: '4 days ago',
			time: '3:23'
		},
		{
			id: 3,
			img: 'https://i.scdn.co/image/ab67616d00004851d2f35b3cbb1d0ecd79bcea77',
			title: 'UnBelievable',
			titledesc: 'Tigor Shrof',
			albumdesc: 'UnBelievable',
			addDate: '3 days ago',
			time: '2:50'
		},
		{
			id: 4,
			img: 'https://i.scdn.co/image/ab67616d00004851dec364287c3b827442f88598',
			title: 'Tehas Nehas',
			titledesc: 'Visahl-Shekhar, Shekhar Ravjita',
			albumdesc: 'Khali Philli',
			addDate: '7 days ago',
			time: '4:10'
		},
		{
			id: 5,
			img: 'https://i.scdn.co/image/ab67616d00004851ee472ac56f258df1931cf8d7',
			title: 'Na Manzoori',
			titledesc: 'Ash King',
			albumdesc: 'Na Manzoori',
			addDate: '5 days ago',
			time: '3:11'
		},
		{
			id: 6,
			img: 'https://i.scdn.co/image/ab67616d0000485153c5d8ae12ed901ad0ad99a9',
			title: 'Mashallah ',
			titledesc: 'THE MXXNLIGHT',
			albumdesc: 'Mashallah',
			addDate: '6 days ago',
			time: '3:22'
		},
		{
			id: 7,
			img: 'https://i.scdn.co/image/ab67616d000048510eb10fcc0b8ec65181ed8439',
			title: 'Tose Naina Lage',
			titledesc: 'Shilpa Rao',
			albumdesc: 'Tose Naina Lage',
			addDate: '3 days ago',
			time: '3:52'
		},
		{
			id: 8,
			img: 'https://i.scdn.co/image/ab67616d00004851f345eba2390c116849d4e8a2',
			title: 'Saanson Ko - Rendition ',
			titledesc: 'THEMXXNLIGHT',
			albumdesc: 'Saanson Ko - Rendition',
			addDate: '2 days ago',
			time: '5:12'
		},
		{
			id: 9,
			img: 'https://i.scdn.co/image/ab67616d00004851095191f6b96fd9eff585befc',
			title: 'Yeh Dooriyan',
			titledesc: 'Pritan,Mohit-Chouhan',
			albumdesc: 'Love Aj Kal',
			addDate: '2 days ago',
			time: '4:51'
		},
		{
			id: 10,
			img: 'https://i.scdn.co/image/ab67616d000048517f59a7efcdad7a7b22d87878',
			title: 'The Humma Song',
			titledesc: 'A.R.Rahman, Badshah',
			albumdesc: 'OK Jaanu',
			addDate: '10 days ago',
			time: '4:23'
		},
		{
			id: 11,
			img: 'https://i.scdn.co/image/ab67616d000048514230b2a06f90d6b79f77f267',
			title: 'Tum Jo Mil Gaye Ho',
			titledesc: 'Mika Singh',
			albumdesc: 'Tum Jo Mil Gaye Ho',
			addDate: '3 days ago',
			time: '4:50'
		},
		{
			id: 12,
			img: 'https://i.scdn.co/image/ab67616d00004851fd762cb31b901ad7bddafa73',
			title: 'Dil Me ho Tum',
			titledesc: 'Arman-Malik, ',
			albumdesc: 'Dil Me ho Tum',
			addDate: '1 days ago',
			time: '3:10'
		},
		{
			id: 13,
			img: 'https://i.scdn.co/image/ab67616d000048517b0449eb71bf2cdec935f58c',
			title: 'So Gaya ye Jaha',
			titledesc: 'Jubin Nautiyal',
			albumdesc: 'So Gaya ye Jaha',
			addDate: '10 days ago',
			time: '5:01'
		},
		{
			id: 14,
			img: 'https://i.scdn.co/image/ab67616d00004851f5dc36d5000145375a41c3b8',
			title: 'Nashe SI Chadh Gayi ',
			titledesc: 'Vishal Shekher, Arijit Singh',
			albumdesc: 'Befikiri',
			addDate: '3 days ago',
			time: '3:22'
		},
		{
			id: 15,
			img: 'https://i.scdn.co/image/ab67616d00004851a4a2746b3065d8399843ab4b',
			title: 'Jahaan tu Chala',
			titledesc: 'Shilpa Rao',
			albumdesc: 'Jahaan tu Chala',
			addDate: '7 days ago',
			time: '3:52'
		},
		{
			id: 16,
			img: 'https://i.scdn.co/image/ab67616d00004851a883e5aa5a747faea92ddefd',
			title: 'Paniyon Sa Chill Mix ',
			titledesc: 'Tulsi Kumar, Sourav Roy',
			albumdesc: 'Paniyon Sa Chill Mix',
			addDate: '15 days ago',
			time: '3:12'
		},
		{
			id: 17,
			img: 'https://i.scdn.co/image/ab67616d000048510bf17c0c9dc828e68794a66b',
			title: 'Har Funn Maula (From Koi Jaane Na)',
			titledesc: 'Tanishk Bagchi',
			albumdesc: 'Har Funn Maula (From Koi Jaane Na)',
			addDate: '4 days ago',
			time: '4:23'
		},
		{
			id: 18,
			img: 'https://i.scdn.co/image/ab67616d0000485169531a37a42d7a3740d2d118',
			title: 'Tum Se He (Reloded)',
			titledesc: 'Ankit Tiwari',
			albumdesc: 'Tum Se He (Reloded)',
			addDate: '4 days ago',
			time: '3:23'
		},
		{
			id: 19,
			img: 'https://i.scdn.co/image/ab67616d00004851d2f35b3cbb1d0ecd79bcea77',
			title: 'UnBelievable',
			titledesc: 'Tigor Shrof',
			albumdesc: 'UnBelievable',
			addDate: '3 days ago',
			time: '2:50'
		},
		{
			id: 20,
			img: 'https://i.scdn.co/image/ab67616d00004851dec364287c3b827442f88598',
			title: 'Tehas Nehas',
			titledesc: 'Visahl-Shekhar, Shekhar Ravjita',
			albumdesc: 'Khali Philli',
			addDate: '7 days ago',
			time: '4:10'
		},
		{
			id: 21,
			img: 'https://i.scdn.co/image/ab67616d00004851ee472ac56f258df1931cf8d7',
			title: 'Na Manzoori',
			titledesc: 'Ash King',
			albumdesc: 'Na Manzoori',
			addDate: '5 days ago',
			time: '3:11'
		},
		{
			id: 22,
			img: 'https://i.scdn.co/image/ab67616d0000485153c5d8ae12ed901ad0ad99a9',
			title: 'Mashallah ',
			titledesc: 'THE MXXNLIGHT',
			albumdesc: 'Mashallah',
			addDate: '6 days ago',
			time: '3:22'
		},
		{
			id: 23,
			img: 'https://i.scdn.co/image/ab67616d000048510eb10fcc0b8ec65181ed8439',
			title: 'Tose Naina Lage',
			titledesc: 'Shilpa Rao',
			albumdesc: 'Tose Naina Lage',
			addDate: '3 days ago',
			time: '3:52'
		},
		{
			id: 24,
			img: 'https://i.scdn.co/image/ab67616d00004851f345eba2390c116849d4e8a2',
			title: 'Saanson Ko - Rendition ',
			titledesc: 'THEMXXNLIGHT',
			albumdesc: 'Saanson Ko - Rendition',
			addDate: '2 days ago',
			time: '5:12'
		},
		{
			id: 25,
			img: 'https://i.scdn.co/image/ab67616d00004851095191f6b96fd9eff585befc',
			title: 'Yeh Dooriyan',
			titledesc: 'Pritan,Mohit-Chouhan',
			albumdesc: 'Love Aj Kal',
			addDate: '2 days ago',
			time: '4:51'
		},
		{
			id: 26,
			img: 'https://i.scdn.co/image/ab67616d000048517f59a7efcdad7a7b22d87878',
			title: 'The Humma Song',
			titledesc: 'A.R.Rahman, Badshah',
			albumdesc: 'OK Jaanu',
			addDate: '10 days ago',
			time: '4:23'
		},
		{
			id: 27,
			img: 'https://i.scdn.co/image/ab67616d000048514230b2a06f90d6b79f77f267',
			title: 'Tum Jo Mil Gaye Ho',
			titledesc: 'Mika Singh',
			albumdesc: 'Tum Jo Mil Gaye Ho',
			addDate: '3 days ago',
			time: '4:50'
		},
		{
			id: 28,
			img: 'https://i.scdn.co/image/ab67616d00004851fd762cb31b901ad7bddafa73',
			title: 'Dil Me ho Tum',
			titledesc: 'Arman-Malik, ',
			albumdesc: 'Dil Me ho Tum',
			addDate: '1 days ago',
			time: '3:10'
		},
		{
			id: 29,
			img: 'https://i.scdn.co/image/ab67616d000048517b0449eb71bf2cdec935f58c',
			title: 'So Gaya ye Jaha',
			titledesc: 'Jubin Nautiyal',
			albumdesc: 'So Gaya ye Jaha',
			addDate: '10 days ago',
			time: '5:01'
		},
		{
			id: 30,
			img: 'https://i.scdn.co/image/ab67616d00004851f5dc36d5000145375a41c3b8',
			title: 'Nashe SI Chadh Gayi ',
			titledesc: 'Vishal Shekher, Arijit Singh',
			albumdesc: 'Befikiri',
			addDate: '3 days ago',
			time: '3:22'
		},
		{
			id: 31,
			img: 'https://i.scdn.co/image/ab67616d00004851a4a2746b3065d8399843ab4b',
			title: 'Jahaan tu Chala',
			titledesc: 'Shilpa Rao',
			albumdesc: 'Jahaan tu Chala',
			addDate: '7 days ago',
			time: '3:52'
		},
		{
			id: 32,
			img: 'https://i.scdn.co/image/ab67616d00004851a883e5aa5a747faea92ddefd',
			title: 'Paniyon Sa Chill Mix ',
			titledesc: 'Tulsi Kumar, Sourav Roy',
			albumdesc: 'Paniyon Sa Chill Mix',
			addDate: '15 days ago',
			time: '3:12'
		}
	];

	let { id } = useParams();
	return (
		<div className="playlistPage">
			<div className="mainInner">
				<div className="playlistInfo">
					<div className="playlistImage">
						<img src="https://i.scdn.co/image/ab67706f0000000340974ce9053be1a6b55b832a" alt="Playlist info" />
					</div>
					<div className="infoRight">
						<p className="PlaylistText">PLAYLIST</p>
						<h1>Sufi & Bollywood</h1>
						<br />
						<br />

						<p className="description">Sufi flavour to Bollywood music</p>
						<div className="SpotifyInfo">
							<p className="SpotifyText">
								{' '}
								<strong>spotify: </strong>
							</p>
							<span>142,552 likes</span>
							<span>.93 Songs</span>
							<span>6 hr 25 min</span>
						</div>
					</div>
				</div>
				<div className="Twoicons">
					<div className="PlayIcon_Image3">
						<PlayIcon />
					</div>
					<div>
						<Heart />
					</div>
					<div>
						<Dots />
					</div>
				</div>

				<div className="PlaylistSongs">
					<table border="0" cellspacing="0">
						<thead>
							<tr>
								<th>#</th>
								<th>TITLE</th>
								<th>ALBUM</th>
								<th>DATE ADDED</th>
								<th>
									<Time />
								</th>
							</tr>
						</thead>
						{ALLList.map((list) => (
							<tbody key={list.id} className="AllSongsList">
								<tr>
									<td>
										<div className="idNumber">
											<span>{list.id}</span>
											<div className="PlaySong">
												<PlaySong />
											</div>
										</div>
									</td>
									<td>
										<div className="SongTitle">
											<img src={list.img} alt="Playlist info" height="50px" width="50px" />
											<h3>
												{list.title}
												<br />
												<span>{list.titledesc}</span>
											</h3>
										</div>
									</td>
									<td>{list.albumdesc}</td>
									<td>{list.addDate}</td>
									<td>
										<div className="PlayTimer">
											<Heart />
											<span>{list.time}</span>
											<Dots />
										</div>
									</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>
			</div>
		</div>
	);
}

export default PlaylistPages;
