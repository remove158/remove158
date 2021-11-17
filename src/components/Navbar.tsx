import React from "react";
import { SignIn, SignOut } from "../utils/auth";

//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {
	user: any;
}

//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const Navbar: React.FC<Props> = ({ user }) => {
	const MINECRAFT = "https://minecraft.piyaphat.xyz";
	const DISCORD = "https://discord.piyaphat.xyz";
	return (
		<div className="mx-auto p-2 shadow-md flex  justify-between   bg-white border-b-2 ">
			<div className="flex flex-row">
				<div className="text-lg font-bold flex  flex-col  justify-center  px-4 ">
					Home
				</div>
				<div className="text-lg font-bold flex  flex-col  justify-center  px-4 ">
					<a href={MINECRAFT}>OSM Craft</a>
				</div>
				<div className="text-lg font-bold flex  flex-col  justify-center  px-4 ">
					<a href={DISCORD}>Discord Bot</a>
				</div>
			</div>
			<div className="text-lg font-bold flex  flex-col  justify-center  px-4 ">
				Hi, {user?.displayName ? user.displayName : "Guest"}
			</div>
			<div className="px-4">{user ? <SignOut /> : <SignIn />}</div>
		</div>
	);
};

export default Navbar;
