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
	return (
		<div className="mx-auto p-2 shadow-md flex  justify-between  bg-white border-b-2 ">
			<div className="text-lg font-bold flex  flex-col  justify-center  px-4 ">
				PLANGTON
			</div>
			<div className="px-4">{user ? <SignOut /> : <SignIn />}</div>
		</div>
	);
};

export default Navbar;
