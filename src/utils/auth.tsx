import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

const signInWithGoogle = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider);
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
				onClick={() => auth.signOut()}
			>
				Sign out
			</button>
		</>
	);
};

export { SignIn, SignOut };
