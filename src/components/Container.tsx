import React from "react";

//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {}

//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const Container: React.FC<Props> = (props) => {
	return (
		<div className="bg-gray-100 flex-1">
			<div className="mx-auto max-w-7xl p-2 h-full">{props.children}</div>
		</div>
	);
};

export default Container;
