import React, {useEffect} from 'react';

type TrackVisibilityProps = {
	children: React.ReactNode;
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
			const onChange = (changes: IntersectionObserverEntry[]) => {
				changes.forEach((change: IntersectionObserverEntry) => {
					if (change.intersectionRatio > 0) {
						loadCard(change.target);
						observer.unobserve(change.target);
					}
				});
			};

			const loadCard = (card: Element) => card.classList.add('show-image');
			const observer = new IntersectionObserver(onChange, options);
			cards.forEach(card => observer.observe(card));
		},
		[children, options]
	);

	return <div>{children}</div>;
};
