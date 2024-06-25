import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const useAdmin = () => {
	const { user } = useAuth();
	const [isAdmin, setIsAdmin] = useState(false);
	const [isAdminLoading, setIsAdminLoading] = useState(true);

	useEffect(() => {
		const fetchAdminStatus = async () => {
			try {
				let response = await fetch(`/api/users/admin/${user?.email}`);
				let data = await response.json();
				let result = data.result;

				setIsAdmin(result);
				setIsAdminLoading(false);
			} catch (error) {
				console.error("Error fetching admin status:", error);
				setIsAdmin(false);
				setIsAdminLoading(false);
			}
		};

		fetchAdminStatus();
	}, [user]);

	return [isAdmin, isAdminLoading];
};

export default useAdmin;
