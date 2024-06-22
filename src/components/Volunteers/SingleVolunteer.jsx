"use client";
import Image from "next/image";
import Link from "next/link";
import { LuClipboardEdit } from "react-icons/lu";

const SingleVolunteer = ({ volunteer }) => {
	const {
		_id,
		name,
		email,
		designation,
		bloodGroup,
		phoneNumber,
		workPlace,
		imageURL,
	} = volunteer;

	return (
		<section className="max-w-sm mx-auto mt-16 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
			<div className="relative">
				<Image
					className="rounded-t-lg h-[300px] w-96 filter brightness-100 saturate-75 hue-rotate-0 contrast-100"
					src={imageURL}
					width={380}
					height={280}
					alt="img"
				/>

				<div className="absolute bottom-0 left-0 bg-opacity-75 bg-emerald-500 text-white p-2">
					<h5 className="text-lg font-bold">{name}</h5>
					<p className="text-base">{designation}</p>
				</div>
			</div>
			<div className="p-4">
				<p className="mb-2 text-gray-700 dark:text-gray-400">
					<span className="font-bold">Email: </span>
					{email}
				</p>
				<p className="mb-2 text-gray-700 dark:text-gray-400">
					<span className="font-bold">Blood: </span>
					{bloodGroup}
				</p>
				<p className="mb-2 text-gray-700 dark:text-gray-400">
					<span className="font-bold">Contact: </span>
					{phoneNumber}
				</p>
				<p className="mb-2 text-gray-700 dark:text-gray-400">
					<span className="font-bold">Location: </span>
					{workPlace}
				</p>
				<div className="flex justify-between mt-3">
					<Link href={`volunteers/${_id}`}>
						<button className="w-full bg-green-500 px-4 py-2 text-white font-semibold rounded">
							<LuClipboardEdit className="inline-block mr-2 text-xl" />
							Edit
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default SingleVolunteer;
