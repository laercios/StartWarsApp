import axios from 'axios'

export const getAllStartShips = (page = 1) => {
  const request = requestStartShipByPage(page)
  return request.then(
    result => {
      if (result.data.next == null) {
        return result.data.results
      } else {
        return result.data.results.concat(getAllStartShips(page + 1))
      }
    }
  ).catch(error => {
    return Promise.reject(error)
  })
}

const requestStartShipByPage = (page) => {
  const request = axios
    .get(`https://swapi.co/api/starships/?page=${page}`)
  return request
}

export const getStarshipById = (id) => {
  const request = requestStarshipById(id)
  return request.then(
    result => {
      return result.data
    }
  ).catch(error => {
    return Promise.reject(error)
  })
}

const requestStarshipById = (id) => {
  const request = axios
    .get(`https://swapi.co/api/starships/${id}/`)
  return request
}
