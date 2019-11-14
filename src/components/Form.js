import React, { useState } from "react";

const Form = (props) => {
	const [ member, setMember ] = useState({
		id: "",
		name: "",
		role: ""
	});

	const handleChanges = (e) => {
		setMember({ ...member, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const newMember = {
			...member,
			id: Date.now()
		};
		props.addTeamMember(newMember);
		setMember({ name: "", email: "", role: "" });
	};
	return (
		<div className="form">
			<form className="formContent" onSubmit={submitHandler}>
				<div className="input">
					<label htmlFor="name"> Members Name: </label>
					<input
						onChange={handleChanges}
						id="name"
						name="name"
						value={member.name}
						type="text"
						placeholder="Name"
					/>
				</div>
				<div className="input">
					<label htmlFor="id"> Members ID: </label>
					<input onChange={handleChanges} id="id" name="id" value={member.id} type="text" placeholder="ID" />
				</div>
				<div className="input">
					<label htmlFor="role"> Members Role: </label>
					<input
						onChange={handleChanges}
						id="role"
						name="role"
						value={member.role}
						type="text"
						placeholder="Role"
					/>
				</div>
				<div className="input">
					<label htmlFor="email"> Members Email: </label>
					<input
						onChange={handleChanges}
						id="email"
						name="email"
						value={member.email}
						type="text"
						placeholder="Email"
					/>
				</div>
				<button className="button__1" type="submit">
					Add Member
				</button>
			</form>
		</div>
	);
};

export default Form;
