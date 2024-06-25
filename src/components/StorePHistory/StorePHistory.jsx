/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";

const StorePHistory = () => {
	const [paymentHistory, setPaymentHistory] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { user } = useAuth();

	useEffect(() => {
		getPaymentHistory();
	}, []);

	const getPaymentHistory = async () => {
		let response = await fetch(`/api/sslmoneyfromdb/${user?.email}`);
		let data = await response.json();
		let result = data.result;
		setPaymentHistory(result);
		setIsLoading(false);
	};

	const total = (
		paymentHistory.reduce((sum, item) => sum + item.price, 0) / 100
	).toFixed(2);

	const handleDownload = () => {
		const formattedData = paymentHistory.map(
			(item, index) =>
				`Index: ${index + 1}\n` +
				`Email: ${item.email}\n` +
				`Amount: $${(item.price / 100).toFixed(2)}\n` +
				`Transaction ID: ${item.tran_id}\n` +
				`Status: ${item.status}\n\n`
		);

		const transactionData = formattedData.join("\n");
		const blob = new Blob([transactionData], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "transaction_info.txt";
		a.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div className="container mx-auto">
			<h2 className="text-4xl font-extrabold text-center pb-6">
				Payment History
			</h2>

			<div className="flex justify-end mb-4">
				<button
					onClick={handleDownload}
					className="flex items-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
				>
					<FaDownload className="mr-2" /> Download
				</button>
			</div>

			<div className="flex flex-col items-center mb-6">
				<div className="w-full lg:w-[30%] bg-green-100 rounded-xl p-6 shadow-lg text-center">
					<h1 className="text-xl font-semibold">Total from Store</h1>
					<h2 className="text-4xl font-bold">${total}</h2>
				</div>
			</div>

			{isLoading ? (
				<div className="flex justify-center items-center">
					<svg
						aria-hidden="true"
						className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<span className="sr-only">Loading...</span>
				</div>
			) : (
				<div className="overflow-x-auto shadow-lg rounded-lg">
					<table className="min-w-full bg-white">
						<thead className="bg-green-500 text-white">
							<tr>
								<th className="text-left py-3 px-4">SI No</th>
								<th className="text-left py-3 px-4">Email</th>
								<th className="text-left py-3 px-4">Amount</th>
								<th className="text-left py-3 px-4">
									Transaction ID
								</th>
								<th className="text-left py-3 px-4">Status</th>
							</tr>
						</thead>
						<tbody>
							{paymentHistory.map((item, index) => (
								<tr
									key={item._id}
									className={
										index % 2 === 0
											? "bg-gray-100"
											: "bg-white"
									}
								>
									<td className="text-left py-3 px-4">
										{index + 1}
									</td>
									<td className="text-left py-3 px-4">
										{item.email}
									</td>
									<td className="text-left py-3 px-4">
										${(item.price / 100).toFixed(2)}
									</td>
									<td className="text-left py-3 px-4">
										{item.tran_id}
									</td>
									<td className="text-left py-3 px-4 text-green-500">
										{item.status}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default StorePHistory;
