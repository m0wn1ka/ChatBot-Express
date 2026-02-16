import express from 'express'
import jwt from "jsonwebtoken";
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
app.use(bodyParser.json())
app.post("/token", (req, res) => {
  const {username, password } = req.body;

  if (!password || !username) {
    return res.status(400).json({ message: "password and username required" });
  }
  const token = jwt.sign({username}, process.env.JWT_SECRET);
  res.json({token});
});

app.listen(8080, () => {
  console.log('Server running on port 8080')
})