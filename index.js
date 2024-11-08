require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Note = require("./models/note");

app.use(express.json());
app.use(express.static("dist"));
app.use(cors());

app.get("/api/notes", (req, res) => {
	Note.find({}).then((notes) => res.json(notes));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

