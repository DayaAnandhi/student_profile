const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.post('/student', (req, res) => {
  const { name, email, phone, address } = req.body;
  const student = { name, email, phone, address };
  // Save the student data to a database or file
  res.send('Student profile created successfully');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

