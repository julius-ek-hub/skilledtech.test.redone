import { useEffect, useState } from "react";

/**
 * @returns {{
 * height: Number,
 * width: Number,
 * xsm: Boolean,
 * sm: Boolean,
 * md: Boolean,
 * lg: Boolean
 * }}
 */

function useDimension() {
	const [dimensions, setDimensions] = useState({});

	const setAllValues = () => {
		setDimensions({
			height: innerHeight,
			width: innerWidth,
			xsm: innerWidth > 0,
			sm: innerWidth > 500,
			md: innerWidth > 700,
			lg: innerWidth > 1000,
		});
	};

	useEffect(() => {
		setAllValues();
		window.addEventListener("resize", setAllValues);
		return () => window.removeEventListener("resize", setAllValues);
	}, []);

	return { ...dimensions };
}

export default useDimension;
