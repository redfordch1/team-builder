import React, { useState } from "react";

const Form = (props) => {
	const [ member, setMember ] = useState([
		{
			id: "",
			name: "",
			role: "",
			email: ""
		}
	]);

	const handleChanges = (e) => {
		setMember({ ...member, [e.target.name]: e.target.value });
	};

	const submitMember = (e) => {
		e.preventDefault();
		props.addTeamMember(member);
		setMember({ name: "", role: "", email: "" });
	};
	return (
		<form onSubmit={submitMember}>
			<label htmlFor="name">Members Name</label>
			<input onChange={handleChanges} id="name" name="name" value={member.name} type="text" placeholder="Name" />

			<label htmlFor="id">Members ID</label>
			<input onChange={handleChanges} id="id" name="id" value={member.id} type="text" placeholder="ID" />

			<label htmlFor="role">Members Role</label>
			<input onChange={handleChanges} id="role" name="role" value={member.role} type="text" placeholder="Role" />

			<label htmlFor="email">Members Email</label>
			<input
				onChange={handleChanges}
				id="email"
				name="email"
				value={member.email}
				type="text"
				placeholder="Email"
			/>
			<button type="submit">Add Member</button>
		</form>
	);
};

export default Form;
