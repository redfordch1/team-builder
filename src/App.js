import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./Data";
import MembersList from "./components/MembersList";
import Form from "./components/Form";

function App() {
	const [ members, setMembers ] = useState([]);

	useEffect(() => {
		setMembers(data);
	}, []);

	const addTeamMember = (person) => {
		setMembers([ ...members, person ]);
	};

	return (
		<div className="App">
			<Form addTeamMember={addTeamMember} />
			{members.map((m) => {
				return <MembersList key={m.id} info={m} />;
			})}
		</div>
	);
}

export default App;
