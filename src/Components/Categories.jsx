import React from 'react';
import Playlist from './Playlist';

function Categories() {
	const dataCategories = [
		{
			id: 1,
			name: 'For Your Listening Pleasure!',
			tagline: 'Music to Help you Concentrate'
		},
		{
			id: 2,
			name: 'Top Chart',
			tagline: 'Top Charts Available for you'
		},
		{
			id: 3,
			name: 'SoundTrack your Home',
			tagline: 'Non Stop Sound Track for your Mood'
		},
		{
			id: 4,
			name: 'Kick back this Sunday..',
			tagline: 'Have fun This Sunday'
		},
		{
			id: 5,
			name: 'Mood',
			tagline: 'Playlist to Match Your Mood'
		}
	];

	return (
		<div className="mainInner">
			{dataCategories.map((Categories) => (
				<div key={Categories.id} className="mainContent">
					<div className="cardWrap">
						<a className="topHaed" href="/">
							<div>
								<h2>{Categories.name}</h2>
								<p className="SubTextMusic">{Categories.tagline}</p>
							</div>
							<a href="/">SEE ALL</a>
						</a>
						<Playlist category_id={Categories.id} />
					</div>
				</div>
			))}
		</div>
	);
}

export default Categories;
