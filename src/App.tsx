import {
	addDoc,
	collection,
	limit,
	orderBy,
	query,
	serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";
// get message from firebase
import { auth, db } from "./config/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";

function SignIn() {
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	};

	return (
		<>
			<button className="sign-in" onClick={signInWithGoogle}>
				Sign in with Google
			</button>
		</>
	);
}
const SignOut = () => {
	return <button onClick={() => auth.signOut()}>Sign out</button>;
};
const UserInfo = ({ user }: { user: User | null | undefined }) => {
	if (!user) {
		return <SignIn />;
	}
	return (
		<>
			{user.photoURL && (
				<img
					src={
						user.photoURL ||
						"https://api.adorable.io/avatars/23/abott@adorable.png"
					}
					alt="user"
				/>
			)}
			<p>
				Welcome, <strong>{user.displayName}</strong>
			</p>
			<SignOut />
		</>
	);
};
function App() {
	const [text, setText] = useState("");
	const userData = query(
		collection(db, "messages"),
		orderBy("createdAt"),
		limit(25)
	);
	const [data] = useCollectionData(userData, {
		idField: "id",
	});
	const [user] = useAuthState(auth);

	const addMessage = (e: any) => {
		e.preventDefault();
		addDoc(collection(db, "messages"), {
			message: text,
			createdAt: serverTimestamp(),
			uid: user?.uid,
			photoURL: user?.photoURL,
		});
		setText("");
	};

	return (
		<div className="App">
			<UserInfo user={user} />

			{data?.map((item) => (
				<Message {...item} isSend={user?.uid === item.uid} />
			))}

			{user && (
				<form onSubmit={addMessage}>
					<input
						value={text}
						type="text"
						onChange={(e) => setText(e.target.value)}
					/>
					<button>Send</button>
				</form>
			)}
		</div>
	);
}

export default App;
const Message = ({ message, createdAt, isSend, photoURL }: any) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: `center`,
				justifyContent: `${isSend ? "flex-end" : "flex-start"}`,
			}}
		>
			{createdAt?.toDate().toLocaleTimeString()}
			<img
				style={{ width: "50px", height: "50px", borderRadius: "50%" }}
				src={photoURL}
				alt="user"
			/>
			{message}
		</div>
	);
};
