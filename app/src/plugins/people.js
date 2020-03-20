import * as $peopleService from '../services/people'

let installed = false

// install plugin
const install = Vue => {
  if (installed) {
    return // users plugin already installed
  }
  Object.defineProperties(
    Vue.prototype, {
      $peopleService: {
        get () {
          return $peopleService
        }
      }
    }
  )

  return (installed = true)
}

export default install
