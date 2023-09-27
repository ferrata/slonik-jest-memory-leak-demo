import express from 'express';

const port = 3000;
const app = express();

app.get('/', (_req, res) => {
  res.end('Hello World!');
});

app.listen(port, () => {
  console.log(`Ready on port ${port}`);
});
