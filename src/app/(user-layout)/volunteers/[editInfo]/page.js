/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import Swal from "sweetalert2";

const UpdateVolunteerData = (props) => {
	const [volunteerData, setVolunteerData] = useState(null);
	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		getSpecificData();
	}, []);

	const getSpecificData = async () => {
		let vol_Id = props.params.editInfo;
		let volData = await fetch(`/api/volunteers/${vol_Id}`);
		volData = await volData.json();
		let result = volData.result;
		setVolunteerData(result);
		setSpinner(false);
	};

	const handleUpdateInfo = async (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const phoneNumber = form.phoneNumber.value;
		const workPlace = form.workPlace.value;
		const total = { name, phoneNumber: parseInt(phoneNumber), workPlace };
		let vol_Id = props.params.editInfo;
		let result = await fetch(`/api/volunteers/${vol_Id}`, {
			method: "PUT",
			body: JSON.stringify(total),
		});
		result = await result.json();
		if (result.success) {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Updated Data",
				showConfirmButton: false,
				timer: 1500,
			});
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-[700px] bg-white p-8 rounded-lg shadow-lg">
				<h2 className="text-center text-4xl my-5 mb-14 text-green-800 font-bold">
					Update Information
				</h2>

				{spinner ? (
					<div className="flex items-center justify-center">
						<MagnifyingGlass
							visible={true}
							height="80"
							width="80"
							ariaLabel="MagnifyingGlass-loading"
							wrapperStyle={{}}
							wrapperClass="MagnifyingGlass-wrapper"
							glassColor="#c0efff"
							color="green"
						/>
					</div>
				) : (
					volunteerData && (
						<form onSubmit={handleUpdateInfo}>
							<div className="relative z-0 w-full mb-6 group">
								<input
									defaultValue={volunteerData.name}
									type="text"
									name="name"
									id="name"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
									placeholder=" "
								/>
								<label
									htmlFor="name"
									className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Name *
								</label>
							</div>

							<div className="grid md:grid-cols-2 md:gap-6">
								<div className="relative z-0 w-full mb-6 group">
									<input
										defaultValue={volunteerData.email}
										type="email"
										name="email"
										id="email"
										className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
										placeholder=" "
										required
										readOnly
									/>
									<label
										htmlFor="email"
										className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										Email
									</label>
								</div>

								<div className="relative z-0 w-full mb-6 group">
									<input
										defaultValue={volunteerData.phoneNumber}
										type="number"
										name="phoneNumber"
										id="phoneNumber"
										className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
										placeholder=" "
										required
									/>
									<label
										htmlFor="phoneNumber"
										className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										Phone number (+8801xxxxxxxxx) *
									</label>
								</div>
							</div>

							<div className="relative z-0 w-full mb-6 group">
								<input
									defaultValue={volunteerData.workPlace}
									type="text"
									name="workPlace"
									id="workPlace"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
									placeholder=" "
									required
								/>
								<label
									htmlFor="workPlace"
									className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Work Place *
								</label>
							</div>

							<div className="flex justify-center items-center">
								<button
									type="submit"
									className="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
								>
									Update
								</button>
							</div>
						</form>
					)
				)}
			</div>
		</div>
	);
};

export default UpdateVolunteerData;
