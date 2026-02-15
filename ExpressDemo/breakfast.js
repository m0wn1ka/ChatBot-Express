import express from 'express';
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

export default router;
