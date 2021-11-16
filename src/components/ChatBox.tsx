import {
	addDoc,
	collection,
	limit,
	orderBy,
	query,
	serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../config/firebase";
import Message from "./Message";

const ChatBox = ({ user }: any) => {
	const userData = query(
		collection(db, "messages"),
		orderBy("createdAt", "desc"),
		limit(12)
	);
	const [data] = useCollectionData(userData, {
		idField: "id",
	});
	const [text, setText] = useState("");
	const addMessage = (e: any) => {
		e.preventDefault();
		addDoc(collection(db, "messages"), {
			message: text,
			createdAt: serverTimestamp(),
			uid: user.uid,
			photoURL: user.photoURL,
		});
		setText("");
	};
	return (
		<div className="p-2 rounded-md">
			<div className="flex flex-col-reverse max-w-6xl gap-4 py-2">
				{data?.map((item) => (
					<Message
						{...item}
						key={item.id}
						isSend={user?.uid === item.uid}
					/>
				))}
			</div>
			<form onSubmit={addMessage} className="flex flex-row my-4">
				<input
					value={text}
					className="shadow flex-1 appearance-none border rounded  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					onChange={(e) => setText(e.target.value)}
				/>
				<button className="bg-blue-500 ml-2  hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full btn btn-blue">
					Send
				</button>
			</form>
		</div>
	);
};

export default ChatBox;
