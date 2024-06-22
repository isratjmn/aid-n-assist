

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { format } from "date-fns";

const fakeEvent = {
	title: "Summer Charity Gala",
	date: "2024-07-15",
	details:
		"Join us for an evening of celebration and fundraising to support local charities. Enjoy live music, food, and inspiring stories from our beneficiaries.",
	image: "https://i.ibb.co/nDbCRLx/01.jpg",
	location: "Grand Ballroom, City Center Hotel",
	time: "18:00",
};

const EventCard = () => {
	const { title, date, details, image, location, time } = fakeEvent;

	const formatTime = (timeString) => {
		const [hours, minutes] = timeString.split(":");
		const parsedHours = parseInt(hours, 10);

		if (parsedHours >= 12) {
			if (parsedHours > 12) {
				return `${parsedHours - 12}:${minutes} PM`;
			} else {
				return `${parsedHours}:${minutes} PM`;
			}
		} else {
			return `${hours}:${minutes} AM`;
		}
	};

	const formattedTime = formatTime(time);

	return (
		<div className="overflow-hidden rounded-2xl shadow-lg relative hover:-translate-y-4 duration-500">
			<Image
				width={320}
				height={320}
				className="w-full h-72"
				src={image}
				alt="event image"
			/>
			<div className="bg-green-500 py-4 px-4 text-white absolute top-0 left-0">
				<h2>{format(new Date(date), "do MMM yy")}</h2>
			</div>
			<div className="p-5">
				<h3 className="text-2xl font-semibold text-black mb-3">
					{title}
				</h3>
				<p className="text-slate-800">
					<FaRegClock className="inline-block mb-1 text-green-500" />{" "}
					<span className="inline-block">{formattedTime}</span>
				</p>
				<p className="text-slate-800">
					<FaMapMarkerAlt className="inline-block mb-1 text-green-500" />{" "}
					<span className="inline-block">{location}</span>
				</p>
				<p className="my-4 text-slate-800">{details}</p>
				<Link href="#" className="text-blue-500">
					Read More{" "}
					<FaArrowRight className="inline-block mb-1 text-blue-500" />
				</Link>
			</div>
		</div>
	);
};

export default EventCard;
