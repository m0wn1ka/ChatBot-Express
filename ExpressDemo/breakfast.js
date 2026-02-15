import express from 'express';
import jwt from "jsonwebtoken";

const router = express.Router();

router.use((req, res, next) => {
  console.log("breakfast route specific middleware");
  next();
});

router.get("/", (req, res) => {
  res.send("data for breakfast route");
});

router.get("/:id", (req, res) => {
  res.send(`Id that came in params is : ${req.params.id}`);
});
router.post("/token", (req, res) => {
  const {username, password } = req.body;

  if (!password || !username) {
    return res.status(400).json({ message: "password and username required" });
  }
  const token = jwt.sign({username}, process.env.JWT_SECRET);
  res.json({token});
});


export default router;
