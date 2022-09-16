import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
  console.log('Acessou Ads');
  return res.json({ message: 'Acessou Ads', updated: true });
})

app.listen(3333);
