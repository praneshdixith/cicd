const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', productsRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Shopify app listening at http://localhost:${port}`);
});

module.exports = app;
