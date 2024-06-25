"use client";
import PricingCard from "@/components/BecomeVolunteer/PricingCard";
import DonatePayment from "@/pages/donatemoney/money";
import axios from "axios";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import "./Pricing.css";

const Pricing = () => {
	const [prices, setPrices] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchPrices();
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	const fetchPrices = async () => {
		const { data } = await axios.get("api/getProd");
		setPrices(data);
	};

	return (
		<div className="relative w-full min-h-screen bg-gradient-to-b from-green-100 to-green-50 py-16">
			{loading ? (
				<div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
					<RingLoader color="#0d47a1" size={100} />
				</div>
			) : (
				<>
					<div className="mx-auto max-w-4xl text-center mt-10 items-center">
						<p className="mt-2 text-4xl font-bold tracking-tight pt-10 text-gray-800 dark:text-white sm:text-5xl">
							Please Raise Your Hand
						</p>
						<p className="mt-4 text-lg text-gray-600 w-[85%] mx-auto dark:text-gray-300">
							Your contribution can make a significant difference
							in someones life.
						</p>
					</div>
					<div className="my-10 mx-auto max-w-4xl">
						<DonatePayment />
					</div>
				</>
			)}
		</div>
	);
};

export default Pricing;
