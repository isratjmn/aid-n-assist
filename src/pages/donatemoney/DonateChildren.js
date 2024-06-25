import React from "react";
import DonateTabMoney from "./DonateTabMoney";

const DonateChildren = ({ item, onPriceClick }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
			{item &&
				item.map((product) => (
					<DonateTabMoney
						key={product._id}
						onPriceClick={onPriceClick}
						product={product}
					/>
				))}
		</div>
	);
};

export default DonateChildren;
