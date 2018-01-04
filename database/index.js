const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Schema = mongoose.Schema;

const repoSchema = new Schema({
  // TODO: your schema here!
  id : Number,
  userName : String,
  popularity : Number,
  description : String,
  repoUrl : String
});

const userSchema = new Schema({
  id : Number,
  userName : String,
  photoUrl : String,
  userUrl : String
})

const Repo = mongoose.model('Repo', repoSchema);

const User = mongoose.model('User', userSchema);

const saveRepo = (repos) => {
  repos.forEach(repo => {
    var newEntry = new Repo({
      id : repo.id,
      userName : repo.owner.login,
      popularity : repo.number,
      description : repo.description,
      repoUrl : repo.html_url
    })
    newEntry.save((err, newEntry) => {
      if (err) {
        return console.error(err)
      };
    })
  })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

const saveUser = (users) => {
  users.forEach(user => {
    var newEntry = new User({
      id : user.id,
      userName : user.userName,
      photoUrl : user.photoUrl,
      userUrl : user.userUrl
    })
    newEntry.save((err, newEntry) => {
      if (err) {
        return console.error(err)
      };
    })
  })
}

// let sampleData = [{
//   id : 1,
//   owner : {login : 'Hayden'},
//   number : 16,
//   description : 'You Know whatever',
//   html_url : 'google.com/hacker'
// },
// {
//   id : 3,
//   owner : {login : 'Hayden'},
//   number : 15,
//   description : 'You Know whatever',
//   html_url : 'google.com/hacker'
// }]

// saveRepo(sampleData);

// let sampleData2 = [{
//   id : 55,
//   userName : 'Hayden Marx',
//   photoUrl : 'github.com/Haydenmarx/mypic',
//   userUrl : 'github.com/Haydenmarx'
// }]

// saveUser(sampleData2);

module.exports = {saveRepo : saveRepo, saveUser : saveUser, Repo : Repo};