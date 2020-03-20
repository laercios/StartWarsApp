import * as $starshipService from '../services/starships'

let installed = false

// install plugin
const install = Vue => {
  if (installed) {
    return // users plugin already installed
  }
  Object.defineProperties(
    Vue.prototype, {
      $starshipService: {
        get () {
          return $starshipService
        }
      }
    }
  )

  return (installed = true)
}

export default install
