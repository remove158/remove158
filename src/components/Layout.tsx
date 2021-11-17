import React from "react";
import ChatBox from "./ChatBox";
import OnlineUser from "./OnlineUser";
//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {
	user: any;
}

//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const Layout: React.FC<Props> = ({ user }) => {
	return (
		<div className="grid grid-cols-4  p-4 bg-gray-50 justify-between gap-4 min-h-screen mx-auto py-4">
			<div className="invisible md:visible col-span-1 h-full "></div>
			<div className="p-4 col-span-4 md:col-span-2 flex h-full bg-white shadow-md rounded-md  flex-col flex-auto max-w-6xl">
				<ChatBox user={user} />
			</div>
			<div className="p-4 invisible md:visible mx-12 col-span-1 h-full bg-white rounded-md shadow-md">
				<OnlineUser user={user} />
			</div>
		</div>
	);
};

export default Layout;
