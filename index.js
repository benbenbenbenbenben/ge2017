const _ = require('lodash')

let gruad = require('./gruad.json')
let yougov = require('./yougov.json')

_.range(yougov.length).forEach(
  i => {

    let needle = yougov[i].constituency
    let result = gruad.filter(r => r.name == needle)
    if (result.length == 0) {
      console.log("could not find " + needle)
    }
  }
)
