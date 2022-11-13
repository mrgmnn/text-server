const express = require('express');
const fs = require('fs').promises;

const app = express();

const template = (data) => (
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <body>
    ${data}
  </body>
</html>`
) 

app.get('/', async (req, res) => {
  const data = await fs.readFile("./textfile.txt", "utf-8"); 
  console.log(data);
  res.send(template(data))
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));