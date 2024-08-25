const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

app.post('/bfhl', (req, res) => {
  const { numbers, alphabets } = req.body;
  // Process the data and respond
  res.json({ numbers, alphabets });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
