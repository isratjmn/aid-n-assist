"use client";
import PricingCard from "@/components/BecomeVolunteer/PricingCard";
import DonatePayment from "@/pages/donatemoney/money";
import axios from "axios";
import { useState, useEffect } from "react";

const Pricing = () => {
	const [prices, setPrices] = useState([]);

	useEffect(() => {
		fetchPrices();
	}, []);

	const fetchPrices = async () => {
		const { data } = await axios.get("api/getProd");
		setPrices(data);
	};

	return (
		<div className="w-full mt-32">
			<div className="mx-auto max-w-4xl text-center mt-10 items-center ">
				<h2 className="text-3xl leading-7 text-green-400">
					They Need Your Help to Survive{" "}
				</h2>
				<p className="mt-2 text-4xl font-bold tracking-tight dark:text-white text-gray-800 sm:text-5xl">
					Please Raise Your Hand
				</p>
				<p>Donate Now</p>
			</div>
			<div className="my-10">
				<DonatePayment />
			</div>
		</div>
	);
};

export default Pricing;
