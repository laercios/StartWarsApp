import axios from 'axios'

export const getPeople = (page = 1) => {
  const request = requestPeopleByPage(page)
  return request.then(
    result => {
      return result.data.results
    }
  ).catch(error => {
    return Promise.reject(error)
  })
}

const requestPeopleByPage = (page) => {
  const request = axios
    .get(`https://swapi.co/api/people/?page=${page}`)
  return request
}
