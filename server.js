const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/<FOLDER_NAME>'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/supercaro/' }
  );
});


app.listen(process.env.PORT || 8000);
