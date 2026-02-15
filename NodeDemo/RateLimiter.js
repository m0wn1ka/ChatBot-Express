import express from 'express'
import rateLimit from 'express-rate-limit'
const app = express();
const limiter = rateLimit({
    max: 5,
    windowMs: 60*1000,
    message: "Too many request from this IP"
});

app.use(limiter);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from the radha mounika" });
});

const port = 8080;
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});