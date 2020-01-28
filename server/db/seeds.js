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

db.decks.insertMany([
  {
    name: "cats",
    deck: [

      {
        name: "Abyssinian",
        playableProperties: {
          size:2,
          rarity:4,
          temper:2
        }

      },
      {
        name: "American Bobtail",
        playableProperties: {
          size:4,
          rarity:6,
          temper:4
        }

      },
      {
        name: "American Curl",
        playableProperties: {
          size:2,
          rarity:7,
          temper:5
        }

      },
      {
        name: "Balinese (aka Javanese)",
        playableProperties: {
          size:3,
          rarity:8,
          temper:4
        }
      }
    ]
  },
  {
    name: "dogs",
    deck: [

      {
        name: "Abyssinian",
        playableProperties: {
          size:2,
          rarity:4,
          temper:2
        }

      },
      {
        name: "American Bobtail",
        playableProperties: {
          size:4,
          rarity:6,
          temper:4
        }

      },
      {
        name: "American Curl",
        playableProperties: {
          size:2,
          rarity:7,
          temper:5
        }

      },
      {
        name: "Balinese (aka Javanese)",
        playableProperties: {
          size:3,
          rarity:8,
          temper:4
        }
      }
    ]
  }
])
