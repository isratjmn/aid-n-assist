"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Rate from "../Rate/Rate";

const Feedback = () => {
	const [rating, setRating] = useState(0);

	const handleFeedback = async (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const feedback = form.feedbackarea.value;
		const Rating = rating;

		const feedbackdata = {
			name,
			email,
			feedback,
			Rating,
		};

		try {
			let res = await fetch("/api/feedbacks", {
				method: "POST",
				body: JSON.stringify(feedbackdata),
				headers: {
					"Content-Type": "application/json",
				},
			});
			res = await res.json();
			if (res.success) {
				Swal.fire(
					"Feedback Sent!",
					"Thank you for your feedback.",
					"success"
				);
				form.reset();
			} else {
				throw new Error("Feedback submission failed");
			}
		} catch (error) {
			Swal.fire(
				"Error",
				"Failed to submit feedback. Please try again later.",
				"error"
			);
		}
	};

	return (
		<div className="my-5 mb-14">
			<h1 className="text-5xl pt-16 text-black font-bold text-center mb-3">
				Feedback
			</h1>
			{/* Rating Section */}
			<div className="flex justify-center">
				<Rate rating={rating} onRating={(rate) => setRating(rate)} />
			</div>
			<p className="text-center text-xl my-8 font-extrabold">
				Rating - {rating}
			</p>

			{/* Form Section */}
			<div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-md shadow-lg border-green-600 border-4">
				<form onSubmit={handleFeedback}>
					<div className="mb-4">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							className="w-full py-2 px-4 text-sm text-gray-900 bg-white dark:bg-gray-800 rounded-lg border-2 focus:ring-0 dark:text-white dark:placeholder-gray-400"
							required
						/>
					</div>
					<div className="mb-4">
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							className="w-full py-2 px-4 text-sm text-gray-900 bg-white dark:bg-gray-800 rounded-lg border-2 focus:ring-0 dark:text-white dark:placeholder-gray-400"
							required
						/>
					</div>
					<div className="mb-4">
						<textarea
							name="feedbackarea"
							rows="4"
							placeholder="Write your feedback here..."
							className="w-full py-2 px-4 text-sm text-gray-900 bg-white dark:bg-gray-800 rounded-lg border-2 focus:ring-0 dark:text-white dark:placeholder-gray-400"
							required
						></textarea>
					</div>
					<div className="flex justify-center">
						<button
							type="submit"
							className="py-2.5 px-6 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-green-900"
						>
							Submit Feedback
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Feedback;
