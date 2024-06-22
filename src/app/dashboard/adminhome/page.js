"use client";
import {
	YAxis,
	ResponsiveContainer,
	ComposedChart,
	CartesianGrid,
	XAxis,
	Tooltip,
	Legend,
	Area,
	Bar,
	Line,
	PieChart,
	Pie,
	Cell,
} from "recharts";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaDonate, FaIdCardAlt } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
import React from "react";

const CustomYAxisTick = ({ x, y, payload }) => {
	const value = payload.value;
	let formattedValue = value;

	if (value >= 300) {
		formattedValue = (value / 1000).toFixed(1) + "k";
	}

	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={16}
				textAnchor="end"
				fill="#666"
				transform="rotate(-45)"
			>
				{formattedValue}
			</text>
		</g>
	);
};

const AdminHomepage = () => {
	const { user } = useAuth();
	const { displayName } = user || {};

	const data = [
		{
			name: "Jan",
			uv: 590,
			pv: 800,
			amt: 1400,
		},
		{
			name: "Feb",
			uv: 868,
			pv: 967,
			amt: 1506,
		},
		{
			name: "Mar",
			uv: 1397,
			pv: 1098,
			amt: 989,
		},
		{
			name: "Apr",
			uv: 1480,
			pv: 1200,
			amt: 1228,
		},
		{
			name: "May",
			uv: 1520,
			pv: 1108,
			amt: 1100,
		},
		{
			name: "Jun",
			uv: 1400,
			pv: 680,
			amt: 1700,
		},
		{
			name: "Jul",
			uv: 1400,
			pv: 680,
			amt: 1700,
		},
		{
			name: "Aug",
			uv: 1400,
			pv: 680,
			amt: 1700,
		},
		{
			name: "Sep",
			uv: 1480,
			pv: 1200,
			amt: 1228,
		},
		{
			name: "Oct",
			uv: 1000,
			pv: 600,
			amt: 1500,
		},
		{
			name: "Nov",
			uv: 1400,
			pv: 680,
			amt: 1700,
		},
		{
			name: "Dec",
			uv: 590,
			pv: 800,
			amt: 1400,
		},
	];

	return (
		<div className="container mx-auto mt-4 px-4 md:px-0">
			<section className="mb-10">
				<h2 className="text-3xl font-bold text-center mt-0 md:mt-10 pt-10 pb-14">
					Hi, <span className="text-green-700">{displayName}</span>
				</h2>

				<div className="grid w-[90%] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="stat bg-blue-200 rounded-lg flex items-center justify-center gap-4 py-6 px-8">
						<div className="text-secondary">
							<HiOutlineCurrencyDollar className="text-5xl text-primary" />
						</div>
						<div>
							<div className="font-extrabold text-2xl">
								Total Donation
							</div>
							<div className="text-lg">$500</div>
							<div className="text-sm text-gray-600">
								Jan 1st - Feb 1st
							</div>
						</div>
					</div>

					<div className="stat bg-green-200 rounded-lg flex items-center justify-center gap-4 py-6 px-8">
						<div className="text-secondary">
							<FaDonate className="text-4xl text-primary" />
						</div>
						<div>
							<div className="font-extrabold text-2xl">
								Total Donors
							</div>
							<div className="text-lg">08</div>
							<div className="text-sm text-gray-600">
								-1.8 Than last Month
							</div>
						</div>
					</div>

					<div className="stat bg-yellow-100 rounded-lg flex items-center justify-center gap-4 py-6 px-8">
						<div className="text-secondary">
							<FaIdCardAlt className="text-4xl text-primary" />
						</div>
						<div>
							<div className="font-extrabold text-2xl">
								Total Volunteers
							</div>
							<div className="text-lg">30</div>
						</div>
					</div>

					<div className="stat bg-blue-200 rounded-lg flex items-center justify-center gap-4 py-6 px-8">
						<div className="text-secondary">
							<HiOutlineCurrencyDollar className="text-5xl text-primary" />
						</div>
						<div>
							<div className="font-extrabold text-2xl">
								Total Vendor
							</div>
							<div className="text-lg">10</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="w-full md:w-[95%] lg:w-[70%]">
					<div
						style={{
							width: "100%",
							height: 450,
							backgroundColor: "#fff",
							borderRadius: "0.5rem",
						}}
					>
						<ResponsiveContainer>
							<ComposedChart
								data={data}
								margin={{
									top: 20,
									right: 30,
									left: 20,
									bottom: 5,
								}}
							>
								<CartesianGrid
									stroke="#f5f5f5"
									vertical={false}
								/>
								<XAxis dataKey="name" scale="band" />
								<YAxis tick={<CustomYAxisTick />} />
								<Tooltip />
								<Legend />
								<Area
									type="monotone"
									dataKey="amt"
									fill="#8884d8"
									stroke="#8884d8"
								/>
								<Bar dataKey="pv" barSize={20} fill="#413ea0" />
								<Line
									type="monotone"
									dataKey="uv"
									stroke="#ff7300"
								/>
							</ComposedChart>
						</ResponsiveContainer>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AdminHomepage;
