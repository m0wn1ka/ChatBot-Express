import { parentPort, workerData, threadId } from 'node:worker_threads';

function heavyCalculation(n) {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += n;
  }
  return sum;
}

const result = heavyCalculation(workerData);

parentPort.postMessage({
  result: `Result of heavy calculation is: ${result} from threadId ${threadId}`
});