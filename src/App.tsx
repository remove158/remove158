import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./config/firebase";
import { doc } from "@firebase/firestore";
import { serverTimestamp, updateDoc } from "firebase/firestore";
function App() {
	const [user] = useAuthState(auth);

	if (user) {
		const ref = doc(db, "presence", user.uid);
		updateDoc(ref, {
			state: "online",
			last_changed: serverTimestamp(),
		});
	}

	return (
		<div className="App">
			<Navbar user={user} />
			<Layout user={user} />
		</div>
	);
}
export default App;
