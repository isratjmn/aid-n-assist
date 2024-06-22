import React from "react";

const Locationbymap = () => {
	return (
		<section className="py-20 pt-10">
			<h1 className="lg:text-4xl text-3xl py-16 font-bold text-center">
				Find Us on Google Map
			</h1>
			<div className="w-full overflow-hidden">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.614039102151!2d90.41933467460866!3d23.796754578638854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73b127fc1b1%3A0xe22df7b475b79f8d!2sEmbassy%20of%20the%20United%20States%20of%20America!5e0!3m2!1sen!2sbd!4v1692265997158!5m2!1sen!2sbd"
					width="100%"
					height="450"
					style={{
						border: "0",
						boxShadow: "0px 8px 8px 5px rgba(0, 0, 0, 0.1)",
					}}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</section>
	);
};

export default Locationbymap;
