"use client";
import React, { useEffect } from "react";

const Nav = () => {
	useEffect(() => {
		const addScript = document.createElement("script");
		addScript.setAttribute(
			"src",
			"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
		);
		document.body.appendChild(addScript);
		window.googleTranslateElementInit = googleTranslateElementInit;
	}, []);

	const googleTranslateElementInit = () => {
		new window.google.translate.TranslateElement(
			{
				pageLanguage: "en",
				autoDisplay: false, 
			},
			"google_translate_element"
		);
	};

	const openTranslateDropdown = () => {
		const widget = window.google.translate.TranslateElement.getInstance();
		if (widget) {
			widget.showBanner();
			widget.show();
		}
	};
	return (
		<div className="flex justify-end " id="google_translate_element">
			<button onClick={openTranslateDropdown}></button>
		</div>
	);
};

export default Nav;
