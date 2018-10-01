const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');

app.use("/dist", express.static(__dirname + '/dist'));

app.get('*', function (req, resp) {
  resp.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log("server started on port " + port)
