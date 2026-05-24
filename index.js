const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/sumCalculator', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const sum = a - b;
  res.json({ a, b, sum });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
