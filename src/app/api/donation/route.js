import { connectionSrt } from "@/lib/db";
import { Donations } from "@/lib/model/donation";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		await mongoose.connect(connectionSrt);
		const data = await Donations.find();
		return NextResponse.json({ result: data, success: true });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json({
			error: "An error occurred while fetching data.",
		});
	}
}
export async function POST(request) {
	const payload = await request.json();
	await mongoose.connect(connectionSrt);
	let donation = new Donations(payload);
	const result = await donation.save();
	return NextResponse.json({ result, success: true });
}
