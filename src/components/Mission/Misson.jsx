import Image from "next/image";
import React from "react";
import Food from "../../../public/icon/healthy-drink.png";
import Cloth from "../../../public/icon/wardrobe.png";
import Education from "../../../public/icon/learning.png";
import Health from "../../../public/icon/heart-beat.png";
import Shelter from "../../../public/icon/shelter.png";
import CleanWater from "../../../public/icon/water-tap.png";

const Misson = () => {
	return (
		<div>
			<div className="pt-24">
				<h1 className="text-center lg:max-w-4xl mx-auto text-4xl font-bold mb-8">
					Welcome to AidNAssist, a nationwide charitable, non-profit
					organization
				</h1>
				<p className="text-center lg:max-w-2xl mx-auto text-xl mb-8">
					We believe in the power of collective effort and community
					involvement.
				</p>
			</div>
			<div>
				<div className="flex flex-col pt-8 pb-16 gap-14 justify-center items-center mt-6 lg:flex-row lg:flex-wrap">
					<div className="flex justify-center gap-8">
						{/* card 1 start */}
						<div className="relative w-[370px] h-[240px] rounded-lg flex justify-center text-center">
							<div className="relative mx-auto items-center rounded-lg transition-transform transform border border-emerald-500 hover:-translate-x-3 hover:-translate-y-3 p-[12px]">
								<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
									<Image
										className="w-10 h-10"
										width={40}
										height={40}
										src={CleanWater}
									/>
								</div>
								<h1 className="text-2xl font-extrabold mt-10">
									Charity For Clean Water
								</h1>
								<p className="text-base text-gray-600 mt-3">
									Clean water, a human right, is scarce,
									jeopardizing health for millions. Join
									Charity for Clean Water to transform lives
									by ensuring access and well-being.
								</p>
							</div>
						</div>
						{/* card 1 End */}

						{/* card 2 start */}
						<div className="relative w-[370px] h-[240px] rounded-lg flex justify-center text-center">
							<div className="relative mx-auto items-center rounded-lg transition-transform transform border border-emerald-500 hover:-translate-x-3 hover:-translate-y-3 p-4">
								<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
									<Image
										className="w-10 h-10"
										width={40}
										height={40}
										src={Shelter}
									/>
								</div>
								<h1 className="text-2xl font-extrabold mt-10">
									Charity For Shelter
								</h1>
								<p className="text-base text-gray-600 mt-3">
									Shelter provides safety, belonging, and
									fresh starts, crucial for well-being. Our
									charity offers hope and empowerment,
									transcending mere accommodation.
								</p>
							</div>
						</div>
						{/* card 2 End */}

						{/* card 3 start */}
						<div className="relative w-[370px] h-[240px] rounded-lg flex justify-center text-center">
							<div className="relative mx-auto items-center rounded-lg transition-transform transform border border-emerald-500 hover:-translate-x-3 hover:-translate-y-3 p-4">
								<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
									<Image
										className="w-10 h-10"
										width={40}
										height={40}
										src={Health}
									/>
								</div>
								<h1 className="text-2xl font-extrabold mt-10">
									Charity For Health
								</h1>
								<p className="text-base text-gray-600 mt-3">
									Charity for Health envisions a healthier
									world with accessible quality healthcare for
									all. Join us to drive positive change and
									make a lasting impact on well-being. Your
									support can transform lives in need.
								</p>
							</div>
						</div>
					</div>
					{/* card 3 End */}
					<div className="flex justify-center gap-8 mt-8 lg:mt-0">
						{/* card 4 start */}
						<div className="relative w-[370px] h-[240px] rounded-lg flex justify-center text-center">
							<div className="relative mx-auto items-center rounded-lg transition-transform transform border border-emerald-500 hover:-translate-x-3 hover:-translate-y-3 p-4">
								<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
									<Image
										className="w-10 h-10"
										width={40}
										height={40}
										src={Food}
									/>
								</div>
								<h1 className="text-2xl font-extrabold mt-10">
									Charity For Food
								</h1>
								<p className="text-base text-gray-600 mt-3">
									Charity for Food is dedicated to ending
									hunger and ensuring no one sleeps hungry.
									Join us in providing nourishment and hope to
									those in need.
								</p>
							</div>
						</div>
						{/* card 4 End */}

						{/* card 5 start */}
						<div className="relative w-[370px] h-[240px] rounded-lg flex justify-center text-center">
							<div className="relative mx-auto items-center rounded-lg transition-transform transform border border-emerald-500 hover:-translate-x-3 hover:-translate-y-3 p-4">
								<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
									<Image
										className="w-10 h-10"
										width={40}
										height={40}
										src={Education}
									/>
								</div>
								<h1 className="text-2xl font-extrabold mt-10">
									Charity For Education
								</h1>
								<p className="text-base text-gray-600 mt-3">
									Charity for Education Breaking poverty's
									cycle, unlocking potential through
									education. Invest in brighter futures with
									us.
								</p>
							</div>
						</div>
						{/* card 5 End */}

						{/* card 6 start */}
						<div className="relative w-[370px] h-[240px] rounded-lg flex justify-center text-center">
							<div className="relative mx-auto items-center rounded-lg transition-transform transform border border-emerald-500 hover:-translate-x-3 hover:-translate-y-3 p-4">
								<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
									<Image
										className="w-10 h-10"
										width={40}
										height={40}
										src={Cloth}
									/>
								</div>
								<h1 className="text-2xl font-extrabold mt-10">
									Charity For Cloth
								</h1>
								<p className="text-base text-gray-600 mt-3">
									Clothing isn't just protection; it's
									confidence. Charity for Cloth empowers by
									providing attire, restoring dignity to those
									vulnerable. Join us in dressing lives with
									respect.
								</p>
							</div>
						</div>
						{/* card 6 End */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Misson;

/* Charity For Shelter

Charity For Health
Charity For Education
Charity For Cloth
Charity For Food */