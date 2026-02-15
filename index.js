import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import OpenAI from 'openai';

const app = express();
app.use(bodyParser.json())
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})
app.post('/talk', async (request, response) => {
    const message = request.body.message;
        const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-5-nano',
        messages: [{ role: 'user', content: message }],
    })
    response.send(chatCompletion.choices[0].message);
    console.log(chatCompletion.choices[0].message);
})

app.listen(process.env.PORT, () => {
    console.log(`App is listening to port ${process.env.PORT}`);
})