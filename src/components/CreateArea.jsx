import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = (props) => {
	const [noteContent, setNoteContent] = useState({
		title: "",
		content: "",
	});
	const [noteExpansion, setNoteExpansion] = useState(false);

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

	const handleNoteExpansion = () => {
		setNoteExpansion((prevValue) => {
			return true;
		});
	};

	return (
		<div>
			<form className="create-note">
				{noteExpansion && (
					<input
						onChange={handleChange}
						name="title"
						placeholder="Title"
						value={noteContent.title}
					/>
				)}

				<textarea
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows={noteExpansion ? "3" : "1"}
					value={noteContent.content}
					onClick={handleNoteExpansion}
				/>

				<Zoom in={noteExpansion}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
};

export default CreateArea;
