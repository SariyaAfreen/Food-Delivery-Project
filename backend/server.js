const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Example middleware
const someMiddleware = (req, res, next) => {
  console.log('Middleware called');
  next();
};

// Use middleware
app.use(someMiddleware);

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
