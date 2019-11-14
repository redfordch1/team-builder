import React from "react";

const MembersList = (props) => {
	return (
		<div>
			<h1>{props.info.name}</h1>
			<p>Role: {props.info.role}</p>
			<p>Email: {props.info.email}</p>
		</div>
	);
};

export default MembersList;
