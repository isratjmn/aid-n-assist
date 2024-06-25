import Contact from "@/components/Contact/Contact";
import CommonBanner from "@/components/CommonBanner/CommonBanner";

import ContactBanner from "@/components/contactusBanner/ContactBanner";
import Locationbymap from "@/components/locatitionbymap/Locationbymap";
import TextToSpeech from "@/components/TextToSpeech/TextToSpeech";

import React from "react";

const metadata = {
	title: "AidNAssist | Contact us",
	description: "By Matrix Coders Unity",
};

const Contactus = () => {
	return (
		<div classname="">
			<TextToSpeech text={"Welcome to Contact us"}></TextToSpeech>
			<CommonBanner
				PageTittle={"Contact"}
				color={"Us"}
				image="https://www.shutterstock.com/image-photo/wooden-blocks-words-help-us-600nw-2248376475.jpg"
			></CommonBanner>
			<Contact></Contact>
			<Locationbymap></Locationbymap>
		</div>
	);
};

export default Contactus;
