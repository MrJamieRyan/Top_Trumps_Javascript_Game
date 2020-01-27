const baseURL = 'http://localhost:3000/api/players/'

export default {

  getPlayers(){
    return fetch(baseURL)
    .then(res => res.json())
  }
  // ,
  // postBooking(payload){
  //   return fetch(baseURL, {
  //     method: 'POST',
  //     body: JSON.stringify(payload),
  //     headers: { 'Content-Type': 'application/json'}
  //   })
  //   .then(result => result.json())
  // },
  // deleteBooking(id){
  //   return fetch(baseURL + id, {
  //     method: 'DELETE'
  //   })
  // },
  // updateBooking(payload, id){
  //   return fetch(baseURL + id, {
  //     method: 'PUT',
  //     body: JSON.stringify(payload),
  //     headers: { 'Content-Type': 'application/json'}
  //   })
  //   .then(result => result.json())
  //
  // }

}
