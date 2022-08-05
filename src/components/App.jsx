import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import noteFile from "../note";

const App = () => {
	return (
		<>
			<Header />
			{noteFile.map((noteItem) => (
				<Note
					key={noteItem.key}
					title={noteItem.title}
					content={noteItem.content}
				/>
			))}
			<Footer />
		</>
	);
};

export default App;
