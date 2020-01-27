use card_game
db.dropDatabase()

db.playerRecords.insertMany([
  {
    playerOneGamesWon: 0,
    playerOneGamesLost: 0,
    playerTwoGamesWon: 0,
    playerTwoGamesLost: 0
  }
])
