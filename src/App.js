import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./components/Data";
import Members from "./components/Data";
import Form from "./components/Data";

function App() {
	const [ member, setMember ] = useState([]);

	useEffect(() => {
		setMember(data);
	}, []);

	const addTeamMember = (person) => {
		const newMember = {
			id: Date.now(),
			name: person.name,
			role: person.role,
			email: person.email
		};
		setMember([ ...member, newMember ]);
	};

	return (
		<div>
			<Form addTeamMember={addTeamMember} />
			{member.map((m) => {
				return <Members key={m.id} info={m} />;
			})}
		</div>
	);
}

export default App;
