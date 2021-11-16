import React from "react";
import ChatBox from "./ChatBox";
import { SignIn, SignOut } from "../utils/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
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
		<div className="flex flex-row bg-gray-50 justify-between  mx-auto ">
			<div className="hidden md:block"></div>
			<div className="flex h-full  flex-col flex-auto max-w-6xl">
				{user && <ChatBox user={user} />}
			</div>
			<div className="hidden md:block"></div>
		</div>
	);
};

export default Layout;
