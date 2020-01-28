const baseURL = 'http://localhost:3000/api/decks/'

export default {

  getDecks(){
    return fetch(baseURL)
    .then(res => res.json())
  },


}
