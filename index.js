const _ = require('lodash')

let gruad = _.orderBy(require('./gruad.json'), "name")
let yougov = _.orderBy(require('./yougov.json'), "constituency")


yougov.map((u, i) => {

  return {
    name: u.constituency,
    winner_est: _.max(u.data.map(d => d.max)),
    winner_act: _.max(gruad[i].candidates.map(y => y.percentageShare))
  }
})
