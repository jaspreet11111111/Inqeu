import React, { useState, useEffect } from 'react'

const Maps = () => {
	const [mobileView, setMobileView] = useState(true);
	const [screenSize, setScreenSize] = useState(undefined);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 800) {
			setMobileView(true);
		} else {
			setMobileView(false);
		}
	}, [screenSize]);
	return (
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41264327946!2d72.75225592709421!3d21.159345832777007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1676303606963!5m2!1sen!2sin" width={mobileView ? '300px' : '500px'} height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	)
}

export default Maps