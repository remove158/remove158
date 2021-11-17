import { query } from "@firebase/firestore";
import { collection, orderBy } from "firebase/firestore";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../config/firebase";

//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {
	user: any;
}

//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const OnlineUser: React.FC<Props> = (props) => {
	const userData = query(
		collection(db, "presence"),
		orderBy("last_changed", "desc")
	);
	const [data] = useCollectionData(userData, { idField: "id" });

	return (
		<div className="">
			{data
				?.filter((e: any) => e.id !== props?.user?.uid)
				?.map((e) => (
					<div
						className={`flex content-center gap-2 flex-row hover:bg-gray-100  p-2 `}
						title={
							e?.state === "online"
								? "กำลังออนไลน์อยู่"
								: "ออนไลน์ล่าสุดเมื่อ" +
								  e?.last_changed.toDate().toLocaleTimeString()
						}
					>
						<img
							className="rounded-full  w-8 h-8 "
							alt="online"
							src={e.photoURL}
						/>
						{e.state === "online" && (
							<span className="absolute ml-6 mt-6 border-white border   h-2 w-2 rounded-full bg-green-400 "></span>
						)}
						<div className="rounded-xl  self-center px-4 flex  flex-wrap content-center font-bold">
							{e.displayName}
						</div>
					</div>
				))}
		</div>
	);
};

export default OnlineUser;
