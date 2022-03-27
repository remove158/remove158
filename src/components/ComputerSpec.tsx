import React from "react";

//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {
	spec: any;
}

//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const ComputerSpec: React.FC<Props> = (props) => {
	return (
		<div className="bg-white rounded-md h-64 border shadow-md p-4 hover:scale-105 transition-all">
			Computer {props.spec}
		</div>
	);
};

export default ComputerSpec;
