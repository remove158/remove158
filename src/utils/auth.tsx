import { serverTimestamp, setDoc, updateDoc } from "@firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc } from "firebase/firestore";

import { auth, db } from "../config/firebase";

const signInWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	await signInWithPopup(auth, provider);

	auth.onAuthStateChanged(async (user) => {
		if (user) {
			const ref = doc(db, "presence", user.uid);
			setDoc(ref, {
				...isOnlineForDatabase,
				photoURL: user.photoURL,
				displayName: user.displayName,
			});
		}
	});
};
window.addEventListener("beforeunload", function (e) {
	if (auth?.currentUser?.uid) {
		const ref = doc(db, "presence", auth?.currentUser?.uid || "");
		updateDoc(ref, isOfflineForDatabase);
	}
});

const isOfflineForDatabase = {
	state: "offline",
	last_changed: serverTimestamp(),
};

const isOnlineForDatabase = {
	state: "online",
	last_changed: serverTimestamp(),
};
const SignIn = () => {
	return (
		<>
			<button
				className=" bg-green-500  hover:bg-green-700 text-white font-bold  py-2 px-4 rounded-full btn btn-green"
				onClick={signInWithGoogle}
			>
				Sign in with Google
			</button>
		</>
	);
};
const SignOut = () => {
	return (
		<>
			<button
				className="bg-red-500  hover:bg-red-700 text-white font-bold px-4 py-2 rounded-full btn btn-red"
				onClick={() => {
					if (auth?.currentUser?.uid) {
						const ref = doc(
							db,
							"presence",
							auth?.currentUser?.uid || ""
						);
						updateDoc(ref, isOfflineForDatabase);
						auth.signOut();
					}
				}}
			>
				Sign out
			</button>
		</>
	);
};

export { SignIn, SignOut };
