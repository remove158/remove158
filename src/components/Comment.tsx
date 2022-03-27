import React from "react";
import moment from "moment";
//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {
	photoURL: string;
	displayName: string;
	comment: string;
	timestamp: { seconds: number };
}

//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const Comment: React.FC<Props> = ({
	photoURL,
	displayName,
	comment,
	timestamp,
}) => {
	const postTime = moment(timestamp.seconds * 1000);
	return (
		<div className=" bg-white border shadow-md shadow-gray-200 rounded-md my-4 p-8 flex items-center">
			<img src={photoURL} className="w-16 h-16 rounded-full" />
			<div className="flex flex-col ml-8">
				<span className="text-2xl font-bold">{displayName}</span>
				<span className="text-gray-500 font-thin">{postTime.calendar()}</span>
				<span className="text-gray-500">{comment}</span>
			</div>
		</div>
	);
};

export default Comment;
