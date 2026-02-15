import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import breakfast from "./breakfast.js";
const app = express();
app.use(bodyParser.json())
app.use("/breakfast", breakfast);
app.post('/talk', async (request, response) => {
    const message = request.body.message;
    response.send("Your message is: " + message);
    console.log("Received message:", message);
})

app.listen(process.env.PORT, () => {
    console.log(`App is listening to port ${process.env.PORT}`);
})