import React from "react";

const DonateTabMoney = ({ product, onPriceClick }) => {
	if (!product) {
		return null;
	}
	const { price } = product;
	return (
		<div className="bg-white pr-6 shadow-md w-24 mx-auto rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
			<button onClick={() => onPriceClick(price)}>
				<div className="mx-auto py-2 p-3">
					<div className="text-center">
						<span className="block text-xl font-bold text-green-500">
							${price}
						</span>
					</div>
				</div>
			</button>
		</div>
	);
};

export default DonateTabMoney;
