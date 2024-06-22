import React from "react";
import Star from "../Store/Star/Star";

const Feeddelete = ({ feed, handleDeleteFeedback }) => {
	const { name, _id, email, feedback, Rating } = feed;
	return (
		<div className="w-full flex justify-center mb-6">
			<div
				key={_id}
				className="w-full sm:w-[320px] md:w-[360px] lg:w-[430px] p-6 bg-white border-green-400 rounded-lg shadow dark:bg-gray-800 border-4 gap-5"
			>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Name: {name}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Email: {email}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Feedback: {feedback}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
					<span className="me-3">Rating: {Rating}</span>
					<Star value={Rating}></Star>
				</p>
				<button
					className="bg-green-400 p-3 rounded-xl text-white hover:bg-green-500 transition duration-300"
					onClick={() => handleDeleteFeedback(_id)}
				>
					Delete Feedback
				</button>
			</div>
		</div>
	);
};

export default Feeddelete;
