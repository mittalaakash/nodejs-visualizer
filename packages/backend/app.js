const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Node.js Visualizer');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
