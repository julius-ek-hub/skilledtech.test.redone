import { useEffect, useState } from "react";

function useDimension() {
	const [dimensions, setDimensions] = useState({
		maxSafeHeight: null,
		smallScreen: null,
	});

	const setAllValues = () => {
		const height = innerHeight;
		const width = innerWidth;
		setDimensions({
			maxSafeHeight: height - 60,
			smallScreen: width <= 780,
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
