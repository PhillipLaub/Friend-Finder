
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);

app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});