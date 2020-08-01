const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/USER', (req, res) => {
  res.json([
    {
      email: 'nincs@emil.cim'
    },
    {
      email: 'nincs@emil.cim2'
    },
    {
      email: 'nincs@emil.cim3'
    }
  ]);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
