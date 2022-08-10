import React, { useState } from "react";

const CreateArea = (props) => {
	const [noteContent, setNoteContent] = useState({
		title: "",
		content: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setNoteContent((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	// Handle submit button to be passed to the APP.jsx
	const submitNote = (event) => {
		props.onAdd(noteContent); //send the current note to app.jsx
		event.preventDefault();
		setNoteContent({
			title: "",
			content: "",
		});
	};

	return (
		<div>
			<form className="create-note">
				<input
					onChange={handleChange}
					name="title"
					placeholder="Title"
					value={noteContent.title}
				/>
				<textarea
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows="3"
					value={noteContent.content}
				/>
				<button onClick={submitNote}>Add</button>
			</form>
		</div>
	);
};

export default CreateArea;
