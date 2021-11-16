import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";
function App() {
	const [user] = useAuthState(auth);
	return (
		<div className="App">
			<Navbar user={user} />
			<Layout user={user} />
		</div>
	);
}
export default App;
