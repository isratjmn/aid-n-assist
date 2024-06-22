"use client";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import EventCard from "@/components/EventCard/EventCard";
import Faq from "@/components/FAQ/Faq";
import Partner from "@/components/Partner/Partner";
import TextToSpeech from "@/components/TextToSpeech/TextToSpeech";
import { useEffect, useState } from "react";

const EventPage = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetch("/api/events")
			.then((res) => res.json())
			.then((data) => setEvents(data.result));
	}, []);

	return (
		<>
			<TextToSpeech text={"Welcome to Event Page"}></TextToSpeech>
			<CommonBanner
				PageTittle={"Our"}
				color={"Event"}
				image="https://annamrita.org/wp-content/uploads/2023/02/Why-should-you-donate-to-the-education-of-impoverished-children_.jpg"
			></CommonBanner>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20 px-2 lg:px-0">
				{events.map((event) => (
					<EventCard key={event._id} event={event}></EventCard>
				))}
			</div>
			<Faq></Faq>
			<Partner></Partner>
		</>
	);
};

export default EventPage;
