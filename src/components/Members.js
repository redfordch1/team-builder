import React from "react";

const Members = (props) => {
	return (
		<div>
			<h1>{props.info.name}</h1>
			<p>Role: {props.info.role}</p>
			<p>Email: {props.info.email}</p>
		</div>
	);
};

export default Members;
