import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request) => {
	const stripe = new Stripe(process.env.NEXT_PUBLIC_Stripe_Secret_SK);
	let data = await request.json();
	let priceId = data.priceId;
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: priceId,
				quantity: 1,
			},
		],
		mode: "payment",
		success_url: "https://aid-n-assist-zeta.vercel.app/payment",
		cancel_url: "https://aid-n-assist-zeta.vercel.app",
	});

	return NextResponse.json(session.url);
};
