import express from 'express';
import { Worker } from 'node:worker_threads';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json())
app.get('/:num', (req, res) => {
  const number = Number(req.params.num || 10);

  const worker = new Worker(
    new URL('./worker.js', import.meta.url),
    {
      workerData: number
    }
  );

  worker.on('message', (result) => {
    res.json({
      input: number,
      result
    });
  });

  worker.on('error', (err) => {
    res.status(500).send(err.message);
  });
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
