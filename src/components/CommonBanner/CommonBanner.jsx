"use client";
import "./CommonBanner.css";

const CommonBanner = ({ PageTittle, color, image }) => {
	return (
		<div
			className="common_banner relative w-full h-[250px] lg:h-[350px] mt-10 lg:mt-[85px] md:h-80 flex justify-center items-center"
			style={{ backgroundImage: `url(${image})` }}
		>
			<div
				className={`absolute inset-0 bg-green-500 opacity-50 ${
					color === "Website" ? "hidden" : ""
				}`}
			></div>
			<h3 className="relative z-10 font-semibold text-2xl md:text-4xl text-white capitalize">
				{PageTittle} <span className="text-green-400">{color}</span>
			</h3>
			
		</div>
	);
};

export default CommonBanner;
