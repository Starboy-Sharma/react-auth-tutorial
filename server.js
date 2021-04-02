const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8080;

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(PORT, () => console.log(`Server is  jumping on ${PORT}`));
