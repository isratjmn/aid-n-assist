"use client";
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/outline";
import img1 from "../../../public/Gallery/gallery-7.jpg";
import img2 from "../../../public/Gallery/gallery-8.jpg";
import img3 from "../../../public/Gallery/gallery-2.jpg";
import img4 from "../../../public/Gallery/gallery-1.jpg";

const DonateNow = () => {
	return (
		<div className="mt-32 container mx-auto">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div className="flex-1 mb-6 md:mb-0 md:mr-10 w-[85%]">
					<h2 className="text-2xl md:text-3xl font-bold mb-6">
						They Need Your Help
					</h2>
					<p className="my-7 w-full hidden lg:block">
						Your contribution goes directly towards funding various
						programs and initiatives. Your generous donation helps
						us provide essential resources and support to those in
						need. Every dollar you give makes a significant impact,
						allowing us to:
					</p>

					<ul className="list-none">
						<li className="flex items-center mb-3">
							<CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
							Food Distribution: Providing nutritious meals to
							families facing food insecurity
						</li>
						<li className="flex items-center mb-3">
							<CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
							Supporting educational initiatives that empower
							children and adults through knowledge and skills.
						</li>
						<li className="flex items-center mb-3">
							<CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
							Offering medical care and health education to
							communities with limited access to healthcare.
						</li>
						<li className="flex items-center mb-3">
							<CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
							Assist communities affected by natural disasters and
							emergencies.
						</li>
						<li className="flex items-center">
							<CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
							Assisting individuals and families affected by
							natural disasters and other emergencies.
						</li>
					</ul>
					<Link href={"payment"}>
						<button className="mt-4 rounded-lg bg-green-300 dark:text-white px-6 py-3">
							Donate Now
						</button>
					</Link>
				</div>

				{/* Image Section */}
				<div className="flex-1 grid grid-cols-2 gap-4">
					<div className="col-span-1">
						<Image
							className="w-full h-auto rounded-xl"
							width={300}
							height={300}
							src={img1}
							alt="Image 1"
						/>
					</div>
					<div className="col-span-1">
						<Image
							className="w-full h-auto rounded-xl"
							width={300}
							height={300}
							src={img2}
							alt="Image 2"
						/>
					</div>
					<div className="col-span-1">
						<Image
							className="w-full h-auto rounded-xl"
							width={300}
							height={300}
							src={img3}
							alt="Image 3"
						/>
					</div>
					<div className="col-span-1">
						<Image
							className="w-full h-auto rounded-xl"
							width={300}
							height={300}
							src={img4}
							alt="Image 4"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonateNow;
