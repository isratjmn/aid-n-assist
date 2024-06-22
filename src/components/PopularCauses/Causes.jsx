"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import { HiOutlineHeart } from "react-icons/hi";
import Link from "next/link";
import "swiper/css";
import "./Causes.css";
import "aos/dist/aos.css";

const Causes = () => {
	useEffect(() => {
		const progressBarElements =
			document.querySelectorAll(".slide-progress");
		progressBarElements.forEach((element, index) => {
			element.style.animationDelay = `${index * 0.5}s`;
		});
	}, []);

	const causes = [
		{
			image: "/causes/cause-2.jpg",
			title: "GivingWave: Ride the Waves of Change",
			progress: 40,
			goal: "$800",
			raised: "$2200",
			link: "/sincause",
		},
		{
			image: "/causes/cause-5.jpg",
			title: "GiveWithEase: Simplifying Online Donations",
			progress: 60,
			goal: "$800",
			raised: "$2200",
			link: "/sincause",
		},
		{
			image: "/causes/charity.jpg",
			title: "DonateEase: Seamless Online Giving",
			progress: 70,
			goal: "$800",
			raised: "$1500",
			link: "/sincause",
		},
		{
			image: "/causes/Causes-Image-3.jpg",
			title: "GenerosityGateway: Streamlined Online Donations",
			progress: 40,
			goal: "$800",
			raised: "$2200",
			link: "/sincause",
		},
	];

	return (
		<section className="mx-auto text-center">
			<div className="mb-5 mx-auto">
				<motion.h1
					className="sm:text-4xl mx-auto text-2xl md:text-4xl font-bold pt-16"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -50 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					Recent <span className="text-green-500">Causes</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -50 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="text-lg leading-7 pt-4 pb-6 w-[65%] lg:w-[90%] mx-auto"
				>
					Actively involved in a variety of causes that address
					pressing social and humanitarian issues
				</motion.p>
			</div>
			<div className="md:text-center sm:ml-auto mx-auto">
				<Link href="/causesdetails" className="nav-link">
					<button
						type="button"
						className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-6 py-3 mb-2"
					>
						View Details
					</button>
				</Link>
			</div>
			<div
				id="causes"
				className="flex flex-col md:flex-row items-center md:justify-between max-w-[1540px] mx-auto"
			></div>

			<div
				className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10"
				data-aos="zoom-out"
			>
				{causes.map((cause, index) => (
					<motion.div
						key={index}
						className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
						initial={{ opacity: 0, y: 80 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						<Image
							src={cause.image}
							alt={`causeImg${index + 1}`}
							width={420}
							height={300}
							className="rounded-t-md"
						/>

						<div className="p-5">
							<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
								{cause.title}
							</h5>

							<ProgressBar
								completed={cause.progress}
								bgColor="#10B981"
								width="100%"
								borderRadius="0"
								height="16px"
								className="mb-6 slide-progress"
								labelAlignment="center"
							/>
							<div className="flex justify-between mb-4">
								<div className="font-bold">
									Goal:
									<span className="text-emerald-500 font-bold">
										{cause.goal}
									</span>
								</div>
								<div className="font-bold">
									Raised:
									<span className="text-emerald-500 font-bold">
										{cause.raised}
									</span>
								</div>
							</div>
							<div className="flex float-left justify-start">
								<Link href={cause.link}>
									<button
										type="button"
										className="my-3 mb-3 inline-flex items-center px-4 py-3 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 gap-2"
									>
										Donation
										<HiOutlineHeart className="text-xl" />
									</button>
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Causes;
