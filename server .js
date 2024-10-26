const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/sound", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "sound.html"));
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
