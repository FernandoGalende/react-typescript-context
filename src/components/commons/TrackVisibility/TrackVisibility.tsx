import React, {useEffect} from 'react';

type TrackVisibilityProps = {
	children: any;
};
export const TrackVisibility: React.FC<TrackVisibilityProps> = ({children}) => {
	const options = {
		root: null,
		rootMargin: '1%',
		threshold: 0.5
	};
	useEffect(
		() => {
			let cards = document.querySelectorAll('div.image-block');
			const onChange = (changes: any) => {
				changes.forEach((change: any) => {
					if (change.intersectionRatio > 0) {
						loadCard(change.target);
						observer.unobserve(change.target);
					}
				});
			};

			const loadCard = (card: any) => card.classList.add('show-image');
			const observer = new IntersectionObserver(onChange, options);
			cards.forEach(card => observer.observe(card));
		},
		[children]
	);

	return <div>{children}</div>;
};
