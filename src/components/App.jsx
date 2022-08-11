import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
	const [notes, setNotes] = useState([]);

	const addNote = (newNote) => {
		setNotes((prevValue) => {
			return [...prevValue, newNote];
		});
	};

	const deleteNote = (id) => {
		console.log("Hey you wanna dellete me");
		setNotes((prevNote) => {
			return prevNote.filter((note, index) => {
				return index !== id;
			});
		});
	};

	return (
		<>
			<Header />
			<CreateArea onAdd={addNote} />

			{notes.map((note, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={note.title}
						content={note.content}
						deleateItem={deleteNote}
					/>
				);
			})}
			<Footer />
		</>
	);
};

export default App;
