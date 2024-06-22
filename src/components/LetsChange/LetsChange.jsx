"use client";
import React, { useEffect, useState } from "react";
import LetsChangeCard from "./LetsChangeCard";
import "aos/dist/aos.css";

const LetsChange = () => {
	const [causes, setCauses] = useState([]);

	useEffect(() => {
		getallCauses();
	}, []);

	const getallCauses = async () => {
		let data = await fetch("/api/getsslcommerz");
		data = await data.json();
		let result = data.result;
		setCauses(result);
	};

	return (
		<div>
			<h1 className="text-center lg:max-w-4xl mx-auto text-2xl mb-4 md:text-4xl font-bold pt-14">
				Lets make a change together
			</h1>
			<p className="text-center lg:max-w-2xl mx-auto text-lg lg:text-xl mb-4 md:mb-10 w-[70%] lg:w-[90%]">
				Enhance the functionality and design of the gallery based on
				your specific requirements and design preferences.
			</p>
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
				{causes &&
					causes
						.slice(0, 4)
						.map((category) => (
							<LetsChangeCard
								key={category._id}
								category={category}
							></LetsChangeCard>
						))}
			</div>
		</div>
	);
};

export default LetsChange;
