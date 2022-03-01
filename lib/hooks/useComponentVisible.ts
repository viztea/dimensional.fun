// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component/45323523#45323523

import { Ref, useEffect, useRef, useState } from "react";

export type ComponentVisible = { 
	ref: Ref<any>; 
	isVisible: boolean; 
	setVisible: (value: boolean) => void; 
}

export default function useComponentVisible(initialIsVisible: boolean): ComponentVisible {
	const [isVisible, setVisible] = useState(initialIsVisible);
	const ref = useRef(null);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	return { ref, isVisible, setVisible };
}
