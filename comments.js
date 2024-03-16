// Create web server
// Use express.js to create a web server
const express = require('express');
const app = express();
const port = 3000;

// Use body-parser to parse JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create an array to store comments
const comments = [];

// Create a function to add a new comment
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.send('Comment added');
});

// Create a function to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
```

```sh
$ node comments.js
Server started on port 3000
```

```sh
$ curl -X POST -H "Content-Type: application/json" -d '{"comment":"Hello"}' http://localhost:3000/comment
Comment added
```

```sh
$ curl http://localhost:3000/comments
["Hello"]
```

## 4.2.2. Create a web server with routes

```js
// Path: routes.js
// Create web server with routes
const express = require('express');
const app = express();
const port = 3000;

// Create a route to handle GET request
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Create a route to handle POST request
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// Create a route to handle PUT request
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// Create a route to handle DELETE request
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
```

```sh
$ node routes.js
Server started on port 3000
```

```sh
$ curl http://localhost:3000
Hello World
```

```sh
$ curl -X POST http://localhost:3000
Got a POST request
```

```sh
$ curl -X PUT http://localhost:3000