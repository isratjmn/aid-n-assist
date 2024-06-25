/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const StorePHistory = () => {
	const [paymentHistory, setPaymentHistory] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { user } = useAuth();

	useEffect(() => {
		getPaymentHistory();
	}, []);

	const getPaymentHistory = async () => {
		try {
			let response = await fetch(`/api/stripemoney/${user?.email}`);
			if (response.ok) {
				let data = await response.json();
				setPaymentHistory(data.result);
			} else {
				console.error("Failed to fetch payment history");
			}
		} catch (error) {
			console.error("Error fetching payment history:", error);
		} finally {
			setIsLoading(false);
		}
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
				`Transaction ID: ${item.transactionId}\n` +
				`Date: ${item.date}\n\n`
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
		<div className="container mx-auto p-4">
			<h2 className="text-3xl font-bold text-center mt-8 mb-4">
				Payment History
			</h2>

			<div className="flex justify-center mb-4">
				<button
					onClick={handleDownload}
					className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 flex items-center gap-2 rounded-lg"
				>
					<FaDownload />
					Download
				</button>
			</div>

			<div className="bg-white shadow-md rounded-lg p-4">
				<h2 className="text-2xl font-bold text-center mb-4">
					${total}
				</h2>

				{isLoading ? (
					<div className="flex justify-center items-center">
						<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
					</div>
				) : (
					<div className="overflow-x-auto rounded-lg">
						<table className="min-w-full border rounded-lg bg-white border-collapse shadow-md">
							<thead className="h-16">
								<tr className="bg-green-500 text-white">
									<th className="py-2 px-4 text-left">
										SI No
									</th>
									<th className="py-2 px-4 text-left">
										Mail
									</th>
									<th className="py-2 px-4 text-left">
										Amount
									</th>
									<th className="py-2 px-4 text-left hidden md:table-cell">
										Transaction ID
									</th>
									<th className="py-2 px-4 text-right">
										Status
									</th>
								</tr>
							</thead>
							<tbody>
								{paymentHistory.map((item, index) => (
									<tr
										key={item._id}
										className={`${
											index % 2 === 0
												? "bg-gray-100"
												: "bg-white"
										} border-b border-gray-200`}
									>
										<td className="py-2 px-4">
											{index + 1}
										</td>
										<td className="py-2 px-4">
											{item.email}
										</td>
										<td className="py-2 px-4">
											${(item.price / 100).toFixed(2)}
										</td>
										<td className="py-2 px-4 hidden md:table-cell">
											{item.transactionId}
										</td>
										<td className="py-2 px-4 text-right">
											{item.date}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
};

export default StorePHistory;
