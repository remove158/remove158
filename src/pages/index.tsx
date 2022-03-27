import { ReactElement } from "react";
import Navbar from "../components/Navbar";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
	return <div className="bg-red-200">test</div>;
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
