"use client";
import { useState, useEffect } from "react";
import SingleVolunteer from "./SingleVolunteer";

const Volunteers = () => {
	const [volunteers, setVolunteers] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api/volunteers");
				if (!response.ok) {
					throw new Error("Failed to fetch volunteers");
				}
				const data = await response.json();
				setVolunteers(data.result);
			} catch (error) {
				console.error("Error fetching volunteers:", error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div data-aos="zoom-out-up" className="mt-1">
			<h1 className="text-center pt-20 pb-6 text-2xl md:text-4xl lg:max-w-4xl font-bold mx-auto">
				Our Inspiring{" "}
				<span className="text-green-500"> Volunteers</span>
			</h1>
			<p className="text-center lg:max-w-4xl text-xl mb-8 w-[65%] lg:w-[90%] mx-auto">
				We believe in the power of collective effort and community
				involvement.
			</p>
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-5">
				{volunteers.map((volunteer) => (
					<SingleVolunteer
						key={volunteer._id}
						volunteer={volunteer}
					/>
				))}
			</div>
		</div>
	);
};

export default Volunteers;
