import express from 'express'
import NodeCache from 'node-cache'
const app = express();
const cache = new NodeCache();
app.get('/:id', (req, res) => {
  const userId = req.params.id;
  const cachedData = cache.get(userId);
  
  if (cachedData) {
    res.json({ data: `Got from cache ${cachedData}` });
  } else {
   cache.set(userId, `User data for ID ${userId}`);
   res.json({ data: `User data for ID ${userId}` });
  }
});
app.listen(8080, () => {
  console.log('Server running on port 8080')
})
