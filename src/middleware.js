import { NextResponse } from "next/server";

export function middleware(req) {
	if (req.nextUrl.pathname.startsWith("/protected")) {
		// Redirect to login if not authenticated
		const isAuthenticated = false; // Replace with actual authentication logic
		if (!isAuthenticated) {
			return NextResponse.redirect("/login");
		}
	}
	return NextResponse.next();
}
