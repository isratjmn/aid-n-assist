import Feedback from "@/components/feedback/Feedback";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import TextToSpeech from "@/components/TextToSpeech/TextToSpeech";

export const metadata = {
	title: "AidNAssist | Feedback",
	description: "By Matrix Coders Unity",
};

const FeedbacRoutePage = () => {
	return (
		<div>
			<TextToSpeech text={"Welcome to Feedback"}></TextToSpeech>
			<CommonBanner
				PageTittle={""}
				color={"Feedback"}
				image="https://images.unsplash.com/photo-1603827457577-609e6f42a45e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			></CommonBanner>
			<Feedback />
		</div>
	);
};

export default FeedbacRoutePage;
