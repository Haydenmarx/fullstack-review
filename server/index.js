const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('../database/index.js');
const saveRepo = db.saveRepo;
const saveUser = db.saveUser;
const git = require('../helpers/github.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // console.log(req.body.userName);
  let callback = (data, count) => {
    saveRepo(JSON.parse(data));
    res.send({'data': data, 'count': count});
  }
  increaseCount(req.body.userName, callback);
});

const increaseCount = (userName, cb) => {
  db.Repo.count(function(err, count) {
    counter = count;
    git.getReposByUsername(userName, cb, count);
  });
}

//https://api.github.com/users/haydenmarx/repos

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

