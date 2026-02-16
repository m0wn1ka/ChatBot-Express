import cluster from 'cluster';
import os from 'os';
import express from 'express';
const numCPUs = os.cpus().length;
if (cluster.isPrimary) {
  console.log(`Primary process PID: ${process.pid}`);
  console.log(`Forking ${numCPUs} workers...\n`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });

} else {
  const app = express();
  app.get('/', (req, res) => {
    res.send(`Handled by worker PID: ${process.pid}`);
  });
  

  app.listen(8081, () => {
    console.log(`Worker ${process.pid} listening on port 8081`);
  });
}
