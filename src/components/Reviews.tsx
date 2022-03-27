import Comment from "@components/Comment";
import { collection, orderBy, query } from "firebase/firestore";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "src/config/firebase";
//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {}

type Review = {
	photoURL: string;
	comment: string;
	timestamp: { seconds: number };
	displayName: string;
};

//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const Reviews: React.FC<Props> = (props) => {
	const userData = query(
		collection(db, "reviews"),
		orderBy("timestamp", "desc")
	);
	const [data] = useCollectionData(userData, {
		idField: "id",
	} as any);
	return (
		<>
			<span className="text-4xl ">Reviews</span>
			{data &&
				(data as Review[]).map((item: Review, _) => {
					const { photoURL, comment, timestamp, displayName } = item;
					return (
						<Comment
							photoURL={photoURL}
							displayName={displayName}
							comment={comment}
							timestamp={timestamp}
						/>
					);
				})}
		</>
	);
};

export default Reviews;
