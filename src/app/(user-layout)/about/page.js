import Image from "next/image";
import React from "react";
import AboutImage from "../../../../public/Gallery/gallery-3.jpg";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import OurMission from "@/components/OurMission/OurMission";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Partner from "@/components/Partner/Partner";
import TextToSpeech from "@/components/TextToSpeech/TextToSpeech";

export const metadata = {
	title: "AidNAssist | About",
	description: "By Matrix Coders Unity",
};

const About = () => {
	return (
		<>
			<TextToSpeech text={"Welcome to About Page"}></TextToSpeech>
			<CommonBanner
				PageTittle={"About"}
				color={"Us"}
				image="https://plus.unsplash.com/premium_photo-1683141170766-017bf7a2ecb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			></CommonBanner>
			<div className="p-2 md:p-0">
				<div className="mt-20 mx-auto">
					<div className="container mx-auto">
						<div className="md:flex gap-10 items-center pb-14 mx-auto justify-center">
							<div className="w-full md:w-[45%] gap-4">
								<Image
									width="250"
									height="400"
									className="w-full rounded-lg"
									src={AboutImage}
									alt="image"
								/>
							</div>
							<div className="w-full mt-8 md:mt-0 lg:w-[50%]">
								<h5 className="mb-2 text-green-500">
									About Us
								</h5>
								<h1 className="font-bold text-2xl md:text-4xl">
									We Are In A Mission To <br /> Help The Help
									ness
								</h1>
								<p className="text-base mt-4 md:mt-5 md:w-[62%]">
									We are a non-profit organisation in USA that
									works towards supporting underprivileged
									children reach their full potential -
									physical, mental as well as emotional.
								</p>
								<ul className="pt-4">
									<li
										className="text-base font-bold  align-middle items-center pb-1"
										style={{ display: "flex" }}
									>
										<IoMdCheckmarkCircleOutline
											style={{
												marginRight: "10px",
												color: "green",
											}}
										/>
										Support people in extreme need
									</li>

									<li
										className="text-base font-bold pb-1  align-middle items-center"
										style={{ display: "flex" }}
									>
										<IoMdCheckmarkCircleOutline
											style={{
												marginRight: "10px",
												color: "green",
											}}
										/>
										Largest global crowdfunding community
									</li>
									<li
										className="text-base font-bold pb-1  align-middle items-center"
										style={{ display: "flex" }}
									>
										<IoMdCheckmarkCircleOutline
											style={{
												marginRight: "10px",
												color: "green",
											}}
										/>
										Make the world a better place
									</li>
									<li
										className="text-base font-bold pb-1  align-middle items-center"
										style={{ display: "flex" }}
									>
										<IoMdCheckmarkCircleOutline
											style={{
												marginRight: "10px",
												color: "green",
											}}
										/>
										Share your love for community
									</li>
								</ul>
								{/* <button
									href="#"
									className="inline-flex items-center mt-2 px-5 py-3 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 gap-2"
								>
									Donation
								</button> */}
							</div>
						</div>
					</div>
				</div>

				<OurMission />
				<Partner></Partner>
			</div>
		</>
	);
};

export default About;
