const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const env = require("./env");

mongoose.connect(env.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

app.use("/api/auth", require("./controllers/Auth"));
app.use("/api/category", require("./controllers/Category"));
app.use("/api/forum", require("./controllers/Forum"));
app.use("/api/thread", require("./controllers/Thread"));
app.use("/api/post", require("./controllers/Post"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

const PORT = process.env.PORT || 27017;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
