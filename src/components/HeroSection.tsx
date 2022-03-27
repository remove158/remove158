import React from "react";
import Link from "next/link";
import ComputerSpec from "./ComputerSpec";

//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {}

//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const HeroSection: React.FC<Props> = (props) => {
	return (
		<div className="min-h-screen py-16 flex flex-col">
			<div className="h-[500px] flex flex-col justify-center">
				<div className="flex flex-col">
					<span className="text-2xl">[BOT] osm#1720</span>
					<span className="">Music bot</span>
				</div>
				<Link href="https://discord.com/api/oauth2/authorize?client_id=805856620026265610&permissions=8&scope=applications.commands%20bot">
					<a className="mt-8 bg-gray-800 rounded-xl py-2  px-4 w-fit hover:bg-gray-600 hover:text-gray-300 text-white block hover:scale-105 transition-all">
						Invite
					</a>
				</Link>
			</div>
			<span className="text-4xl mb-6">Status</span>
			<div className="h-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
				{new Array(2).fill(0).map((spec, idx) => (
					<ComputerSpec key={idx} spec={idx} />
				))}
			</div>
		</div>
	);
};

export default HeroSection;
