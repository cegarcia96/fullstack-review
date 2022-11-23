const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  html_url: {type: String, index: {unique: true}},
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // let newRepo = new Repo({
  //   username: repoObject.owner.login,
  //   reponame: repoObject.name,
  //   url: repoObject.html_url,
  //   forks: repoObject.forks
  // })
  // newRepo.save((err, newRepo) => {
  //   if (err) {
  //     console.log('Repo already in database');
  //   } else {
  //     console.log(newRepo);
  //   }
  // });
  // The above approach doesn't work because you respond to the client before the whole
  // array of repos is done saving

  return Repo.create(repos);

  // Repo.create does this:
    // return Promise.all(repos.map(repo => {
    //  return new Repo(repo).save()
    // }))
}

let getRepos = (callback) => {
  Repo.find({}).sort({forks: -1}).exec((err, repos) => { // .exec.then is an option, returns a promise
    if (err) {
      callback(err)
    } else {
      callback(null, repos);
    }
  })
}
module.exports = {
  save: save,
  getRepos: getRepos
}