import React from "react";

//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {}

//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const Container: React.FC<Props> = (props) => {
	return <div className="mx-auto max-w-7xl">{props.children}</div>;
};

export default Container;
