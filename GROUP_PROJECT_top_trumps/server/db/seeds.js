use card_game
db.dropDatabase()

db.players.insertMany([
  {
    playerOneGamesWon: 3,
    playerOneGamesLost: 4,
    playerTwoGamesWon: 3,
    playerTwoGamesLost: 1
  }
])
