import Providers from "@/providers";
import React from "react";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";

export const metadata = {
	title: "Dashboard",
	description: "By Matrix Coders Unity",
};

const DashboardLayout = ({ children }) => {
	return (
		<div>
			<Providers>
				<div className="lg:flex md:mt-[86px] lg:mt-[88px] mb-1">
					<div className="lg:w-[13%] w-[100%]">
						<DashboardSidebar />
					</div>
					<div className="ml-2 md:ml-40 lg:ml-1 lg:p-4 px-3 lg:w-[100%]">
						{children}
					</div>
				</div>
			</Providers>
		</div>
	);
};

export default DashboardLayout;
