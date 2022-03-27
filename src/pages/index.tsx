import Container from "@components/Container";
import Reviews from "@components/Reviews";
import { ReactElement } from "react";
import Navbar from "../components/Navbar";
import { NextPageWithLayout } from "./_app";
const Home: NextPageWithLayout = () => {
	return (
		<Container>
			<Reviews />
		</Container>
	);
};
Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Navbar />
			{page}
		</>
	);
};
export default Home;
