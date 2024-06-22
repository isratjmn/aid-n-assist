import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const useDonor = () => {
	const { user } = useAuth();
	const [isDonor, setIsDonor] = useState(false);
	const [isDonorLoading, setIsDonorLoading] = useState(true);

	useEffect(() => {
		const fetchDonorStatus = async () => {
			try {
				let response = await fetch(`/api/users/donor/${user?.email}`);
				let data = await response.json();
				let result = data.result;
				console.log("Is Donor Response", response);

				setIsDonor(result);
				setIsDonorLoading(false);
			} catch (error) {
				console.error("Error fetching Donor status:", error);
				setIsDonor(false);
				setIsDonorLoading(false);
			}
		};

		fetchDonorStatus();
	}, [user]);

	return [isDonor, isDonorLoading];
};

export default useDonor;
