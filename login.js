const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userL = require("./models/userSchema.model.js");

PORT = process.env.ports || 2500;

const app = express();

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to server successfully");
    app.post("/api/register", async (req, res) => {
      const { username, password } = req.body;
      try {
        const user = await new userL({ username, password });
        user.save();
        res.status(200).json({ message: "user create successfully" });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    app.post("/api/login", (req, res)=> {

    })
  })
  .catch((Error) =>
    console.log(`SOmething went wrong while connecting to the server${Error}`)
  );
