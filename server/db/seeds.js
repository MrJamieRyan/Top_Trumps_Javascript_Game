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
    name: 'cats',
    deck: [
      {
        name: 'Abyssinian',
        imageURL: 'https://i.ibb.co/KbRjwQs/abyssinian-1.jpg',
        playableProperties: {
          size: 2,
          rarity: 4,
          temper: 2
        }
      },
      {
        name: 'American Bobtail',
        imageURL: 'https://i.ibb.co/Hpq3k88/american-bobtail-1.jpg',
        playableProperties: {
          size: 4,
          rarity: 6,
          temper: 4
        }
      },
      {
        name: 'American Curl',
        imageURL: 'https://i.ibb.co/vVF2cdf/american-curl-1.jpg',
        playableProperties: {
          size: 2,
          rarity: 7,
          temper: 5
        }
      },
      {
        name: 'Balinese',
        imageURL: 'https://i.ibb.co/xmWyVVt/balinese-1.jpg',
        playableProperties: {
          size: 3,
          rarity: 8,
          temper: 4
        }
      },
      {
        name: 'Bengal',
        imageURL: 'https://i.ibb.co/8xqfjMV/bengal-1.jpg',
        playableProperties: {
          size: 4,
          rarity: 1,
          temper: 3
        }
      },
      {
        name: 'Bombay',
        imageURL: 'https://i.ibb.co/ScVkM17/bombay-1.jpg',
        playableProperties: {
          size: 3,
          rarity: 2,
          temper: 5
        }
      },
      {
        name: 'British Shorthair',
        imageURL: 'https://i.ibb.co/kmfT5Y5/british-shorthair-1.jpg',
        playableProperties: {
          size: 4,
          rarity: 1,
          temper: 4
        }
      },
      {
        name: 'Devon Rex',
        imageURL: 'https://i.ibb.co/KbjXMzM/devon-rex-1.jpg',
        playableProperties: {
          size: 2,
          rarity: 7,
          temper: 5
        }
      },
      {
        name: 'Egyptian Mau',
        imageURL: 'https://i.ibb.co/cxtMC4P/egyptian-mau-1.jpg',
        playableProperties: {
          size: 3,
          rarity: 7,
          temper: 2
        }
      },
      {
        name: 'Japanese Bobtail',
        imageURL: 'https://i.ibb.co/V3ZGbx9/japanese-bobtail-1.jpg',
        playableProperties: {
          size: 3,
          rarity: 8,
          temper: 5
        }
      },
      {
        name: 'Nina',
        imageURL: 'https://i.ibb.co/rtR38Mm/nina-2.jpg',
        playableProperties: {
          size: 3,
          rarity: 10,
          temper: 10
        }
      },
      {
        name: 'Maine Coon',
        imageURL: 'https://i.ibb.co/dMnpn8Z/maine-coon-1.jpg',
        playableProperties: {
          size: 5,
          rarity: 2,
          temper: 4
        }
      },
      {
        name: 'Manx',
        imageURL: 'https://i.ibb.co/x2xwY2K/manx-1.jpg',
        playableProperties: {
          size: 4,
          rarity: 9,
          temper: 3
        }
      },
      {
        name: 'Norwegian Forest',
        imageURL: 'https://i.ibb.co/q5d2GVC/norwegian-forest-1.jpg',
        playableProperties: {
          size: 5,
          rarity: 3,
          temper: 5
        }
      },
      {
        name: 'Persian',
        imageURL: 'https://i.ibb.co/X2xBbYs/persian-1.jpg',
        playableProperties: {
          size: 4,
          rarity: 2,
          temper: 5
        }
      },
      {
        name: 'Ocicat',
        imageURL: 'https://i.ibb.co/tMP5r6n/ocicat-1.jpg',
        playableProperties: {
          size: 3,
          rarity: 7,
          temper: 4
        }
      },
      {
        name: 'Ragdoll',
        imageURL: 'https://i.ibb.co/F0N9Fvt/ragdoll-1.jpg',
        playableProperties: {
          size: 4,
          rarity: 5,
          temper: 5
        }
      },
      {
        name: 'Ragamuffin',
        imageURL: 'https://i.ibb.co/fXqLgCm/ragamuffin-1.jpg',
        playableProperties: {
          size: 5,
          rarity: 6,
          temper: 4
        }
      },
      {
        name: 'Russian Blue',
        imageURL: 'https://i.ibb.co/Dt5LgvW/russian-blue-1.jpg',
        playableProperties: {
          size: 2,
          rarity: 8,
          temper: 3
        }
      },
      {
        name: 'Savannah',
        imageURL: 'https://i.ibb.co/DLPPwcv/savannah-1.jpg',
        playableProperties: {
          size: 3,
          rarity: 9,
          temper: 3
        }
      },
      {
        name: 'Scottish Fold',
        imageURL: 'https://i.ibb.co/JcwmzdZ/scottish-fold-1.png',
        playableProperties: {
          size: 2,
          rarity: 8,
          temper: 5
        }
      },
      {
        name: 'Selkirk Rex',
        imageURL: 'https://i.ibb.co/dBssqJW/selkirk-rex-1.jpg',
        playableProperties: {
          size: 3,
          rarity: 6,
          temper: 4
        }
      },
      {
        name: 'Siamese',
        imageURL: 'https://i.ibb.co/RQgYKys/siamese-1.jpg',
        playableProperties: {
          size: 2,
          rarity: 3,
          temper: 5
        }
      },
      {
        name: 'Siberian',
        imageURL: 'https://i.ibb.co/CbZW7fj/syberian-1.jpg',
        playableProperties: {
          size: 4,
          rarity: 6,
          temper: 3
        }
      },
      {
        name: 'Singapura',
        imageURL: 'https://i.ibb.co/DbbvRsm/singapura-1.jpg',
        playableProperties: {
          size: 1,
          rarity: 7,
          temper: 4
        }
      },
      {
        name: 'Sphynx',
        imageURL: 'https://i.ibb.co/YW5w4bN/sphynx-1.jpg',
        playableProperties: {
          size: 3,
          rarity: 9,
          temper: 4
        }
      },
      {
        name: 'Nyancat',
        imageURL: 'https://i.ibb.co/CmtFL0V/nyancat-1.jpg',
        playableProperties: {
          size: 3,
          rarity: 8,
          temper: 7
        }
      },
      {
        name: 'Tiger',
        imageURL: 'https://i.ibb.co/rkpwf0P/tiger-1.jpg',
        playableProperties: {
          size: 6,
          rarity: 10,
          temper: 0
        }
      },
      {
        name: 'Turkish Van',
        imageURL: 'https://i.ibb.co/s3KzGDz/turkish-van-1.jpg',
        playableProperties: {
          size: 4,
          rarity: 8,
          temper: 2
        }
      },
      {
        name: 'Stray Cat',
        imageURL: 'https://i.ibb.co/WffK2yB/stray-cat-1.jpg',
        playableProperties: {
          size: 3,
          rarity: 1,
          temper: 5
        }
      }

    ]
  }
  ,
  {
    name: "skyscrapers",
    deck: [
  {
     name:"John Hancock Center, Chicago IL",
    Country:"USA",
imageURL: null,
playableProperties:{     height:1128,
    floors:108,
    floorspace:2.8,
    buildingtime:5 }
  },
  {
     name:"Q1 Tower, Gold Coast City",
    Country:"Australia",
imageURL: null,
playableProperties:{     height:1058,
    floors:80,
    floorspace:2.3,
    buildingtime:3 }
  },
  {
     name:"Freedom Tower, New York NY",
    Country:"USA",
imageURL: null,
playableProperties:{     height:1776,
    floors:105,
    floorspace:2.6,
    buildingtime:7 }
  },
  {
     name:"Jin Mao Tower, Shanghai",
    Country:"China",
imageURL: null,
playableProperties:{     height:1380,
    floors:88,
    floorspace:3,
    buildingtime:5 }
  },
  {
     name:"Trump International Hotel and Tower, Chicago IL",
    Country:"USA",
imageURL: null,
playableProperties:{     height:1389,
    floors:70,
    floorspace:2.6,
    buildingtime:4 }
  },
  {
     name:"Tokyo City Hall, Tower 1, Tokyo",
    Country:"Japan",
imageURL: null,
playableProperties:{     height:799,
    floors:50,
    floorspace:2.1,
    buildingtime:3 }
  },
  {
     name:"Torre Mayor, Mexico City",
    Country:"Mexico",
imageURL: null,
playableProperties:{     height:738,
    floors:55,
    floorspace:1.7,
    buildingtime:4 }
  },
  {
     name:"Woolworth Building, New York NY",
    Country:"USA",
imageURL: null,
playableProperties:{     height:792,
    floors:57,
    floorspace:1.3,
    buildingtime:3 }
  },
  {
     name:"Kingdom Centre, Riyadh",
    Country:"United Arab Emirates",
imageURL: null,
playableProperties:{     height:992,
    floors:41,
    floorspace:2,
    buildingtime:3 }
  },
  {
     name:"Transamerica Pyramid, San Francisco CA",
    Country:"USA",
imageURL: null,
playableProperties:{     height:853,
    floors:48,
    floorspace:0.5,
    buildingtime:3 }
  },
  {
     name:"Trump World Tower, New York NY",
    Country:"USA",
imageURL: null,
playableProperties:{     height:861,
    floors:72,
    floorspace:0.9,
    buildingtime:2 }
  },
  {
     name:"The Gherkin, London",
    Country:"United Kingdom",
imageURL: null,
playableProperties:{     height:590,
    floors:41,
    floorspace:0.7,
    buildingtime:2 }
  },
  {
     name:"Houses of Parliament, London",
    Country:"United Kingdom",
imageURL: null,
playableProperties:{     height:323,
    floors:9,
    floorspace:4.6,
    buildingtime:48 }
  },
  {
     name:"Petronas Twin Towers, Kuala Lumpur",
    Country:"Malaysia",
imageURL: null,
playableProperties:{     height:1463,
    floors:88,
    floorspace:4.3,
    buildingtime:6 }
  },
  {
     name:"Bank of China Tower, Hong Kong",
    Country:"China",
imageURL: null,
playableProperties:{     height:1205,
    floors:70,
    floorspace:1.5,
    buildingtime:5 }
  },
  {
     name:"Shanghai World Financial Center, Shanghai",
    Country:"China",
imageURL: null,
playableProperties:{     height:1614,
    floors:101,
    floorspace:4.1,
    buildingtime:11 }
  },
  {
     name:"World Trade Center, New York NY",
    Country:"USA",
imageURL: null,
playableProperties:{     height:1368,
    floors:110,
    floorspace:4.3,
    buildingtime:3 }
  },
  {
     name:"Bank of America Tower, New York NY",
    Country:"USA",
imageURL: null,
playableProperties:{     height:1200,
    floors:54,
    floorspace:2.1,
    buildingtime:5 }
  },
  {
     name:"Empire State Building, New York NY",
    Country:"USA",
imageURL: null,
playableProperties:{     height:1250,
    floors:102,
    floorspace:2.8,
    buildingtime:1 }
  },
  {
     name:"Willis Tower, Chicago IL",
    Country:"USA",
imageURL: null,
playableProperties:{     height:1451,
    floors:108,
    floorspace:4.6,
    buildingtime:3 }
  },
  {
     name:"Burj Al Arab, Dubai",
    Country:"United Arab Emirates",
imageURL: null,
playableProperties:{     height:1053,
    floors:60,
    floorspace:1.2,
    buildingtime:5 }
  },
  {
     name:"Chrysler Building, New York NY",
    Country:"USA",
imageURL: null,
playableProperties:{     height:1046,
    floors:77,
    floorspace:1.2,
    buildingtime:2 }
  },
  {
     name:"International Commercer Centre, Hong Kong",
    Country:"China",
imageURL: null,
playableProperties:{     height:1558,
    floors:108,
    floorspace:2.8,
    buildingtime:8 }
  },
  {
     name:"One Canada Square, London",
    Country:"United Kingdom",
imageURL: null,
playableProperties:{     height:771,
    floors:55,
    floorspace:1.2,
    buildingtime:3 }
  },
  {
     name:"21st Century Tower, Dubai",
    Country:"United Arab Emirates",
imageURL: null,
playableProperties:{     height:883,
    floors:55,
    floorspace:0.9,
    buildingtime:2 }
  },
  {
     name:"The Shard, London",
    Country:"United Kingdom",
imageURL: null,
playableProperties:{     height:1017,
    floors:72,
    floorspace:1.3,
    buildingtime:3 }
  },
  {
     name:"Taipei 101, Taipei",
    Country:"Taiwan",
imageURL: null,
playableProperties:{     height:1667,
    floors:101,
    floorspace:4.4,
    buildingtime:5 }
  },
  {
     name:"Leaning Tower of Pisa, Pisa",
    Country:"Italy",
imageURL: null,
playableProperties:{     height:186,
    floors:8,
    floorspace:1,
    buildingtime:177 }
  },
  {
     name:"Burj Khalifa, Dubai",
    Country:"United Arab Emirates",
imageURL: null,
playableProperties:{     height:2717,
    floors:163,
    floorspace:3.6,
    buildingtime:6 }
  },
  {
     name:"Al Faisaliyah Center, Riyadh",
    Country:"United Arab Emirates",
imageURL: null,
playableProperties:{     height:876,
    floors:30,
    floorspace:0.4,
    buildingtime:3 }
  }
]
  }
])
