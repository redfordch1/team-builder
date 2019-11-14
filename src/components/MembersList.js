import React from "react";

const MembersList = (props) => {
	return (
		<div className="memberCard">
			<div className="members__list">
				<h1>{props.info.name}</h1>
				<p>Role: {props.info.role}</p>
				<p>Email: {props.info.email}</p>
			</div>
		</div>
	);
};

export default MembersList;
