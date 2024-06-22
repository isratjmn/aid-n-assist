"use client";
import "./testimonial.css";
import Image from "next/image";
import frist from "../../../public/Gallery/testing.jpg";

const Testimonial = () => {
	return (
		<div className="mt-32">
			<h2 className="text-center pb-3 lg:pb-6 text-2xl md:text-4xl lg:max-w-4xl font-bold mx-auto">
				Our <span className="text-blue-800">Testimonial</span>
			</h2>
			<p className="text-center lg:max-w-2xl mx-auto text-lg lg:text-xl mb-4 md:mb-10 w-[65%] lg:w-[90%]">
				They provide detailed information about the organizations and
				initiatives they support, including financial disclosures and
				project updates.
			</p>
			<div className="bannersetup bg-fixed h-fit w-full py-3">
				<div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 grid grid-cols-1">
					{/* 1st */}
					<div className="pt-2 lg:pt-0 lg:w-[60%] mx-auto">
						<div className="triangle absolute inset-0 text-center z-10">
							<h1 className="relative z-20 text-center text-black">
								One of the most compelling aspects of donation
								websites is their accessibility. Anyone with
								internet access can visit these platforms from
								anywhere in the world, allowing individuals to
								support causes regardless of geographical
								boundaries.
							</h1>
						</div>
						<div className="flex justify-center items-center ">
							<Image
								className="w-14 h-14 rounded-full border-4 border-green-400"
								src={frist}
								alt="image"
							/>
						</div>
					</div>
					{/* 1st end */}
					{/* 2nd */}
					<div className="pt-2 lg:pt-0  lg:w-[60%] mx-auto">
						<div className="triangle absolute inset-0 text-center z-10">
							<h1 className="relative z-20 text-black">
								From humanitarian aid and disaster relief to
								environmental conservation and education
								initiatives, donation websites cater to a wide
								spectrum of causes. This diversity allows donors
								to align their contributions with issues that
								resonate personally, fostering a sense of
								empowerment and fulfillment.
							</h1>
						</div>
						<div className="flex justify-center items-center ">
							<Image
								className="w-14 h-14 rounded-full border-4 border-green-400"
								src={frist}
								alt="image"
							/>
						</div>
					</div>
					{/* 2nd end */}
					{/* 3rd */}
					<div className="pt-2 lg:pt-0 lg:w-[60%] mx-auto">
						<div className="triangle absolute inset-0 text-center z-10">
							<h1 className="relative z-20 text-black">
								Donation websites facilitate peer-to-peer
								fundraising, empowering individuals to create
								personalized campaigns on behalf of their
								favorite charities. This grassroots approach
								harnesses the power of social networks,
								exponentially expanding.
							</h1>
						</div>
						<div className="flex justify-center items-center ">
							<Image
								className="w-14 h-14 rounded-full border-4 border-green-400"
								src={frist}
								alt="image"
							/>
						</div>
					</div>
					{/* 3rd end */}
					{/* 4th */}
					<div className="pt-2 lg:pt-0 lg:w-[60%] mx-auto">
						<div className="triangle absolute inset-0 text-center z-10">
							<h1 className="relative z-20 text-black">
								donation websites play a pivotal role in
								democratizing philanthropy and driving social
								impact worldwide. Through accessibility,
								transparency, and technological innovation,
								these platforms empower individuals to make
								meaningful contributions to causes they care
								about.
							</h1>
						</div>
						<div className="flex justify-center items-center ">
							<Image
								className="w-14 h-14 rounded-full border-4 border-green-400"
								src={frist}
								alt="image"
							/>
						</div>
					</div>
					{/* 4th end */}
				</div>
				{/* after two cols */}
			</div>
		</div>
	);
};

export default Testimonial;
