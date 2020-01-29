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
    name: 'Cats',
    deckImageURL: 'https://i.ibb.co/zX7sm5d/IMG-20200129-114611.jpg',
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
    name: "Skyscrapers",
    deckImageURL: 'https://i.ibb.co/MGTzz80/skyscraper-card-back.jpg',
    deck: [
  {
     name:"John Hancock Center, Chicago IL",
    Country:"USA",
imageURL: 'https://i.ibb.co/yF2Fq1n/john-hancock.jpg',
playableProperties:{     height:1128,
    floors:108,
    floorspace:2.8,
    buildingtime:5 }
  },
  {
     name:"Q1 Tower, Gold Coast City",
    Country:"Australia",
imageURL: 'https://i.ibb.co/PC1bzQm/q1-tower.jpg',
playableProperties:{     height:1058,
    floors:80,
    floorspace:2.3,
    buildingtime:3 }
  },
  {
     name:"Freedom Tower, New York NY",
    Country:"USA",
imageURL: 'https://i.ibb.co/LdHm3qq/freedom-tower.jpg',
playableProperties:{     height:1776,
    floors:105,
    floorspace:2.6,
    buildingtime:7 }
  },
  {
     name:"Jin Mao Tower, Shanghai",
    Country:"China",
imageURL: 'https://i.ibb.co/YR0KxVS/jin-mao-tower.jpg',
playableProperties:{     height:1380,
    floors:88,
    floorspace:3,
    buildingtime:5 }
  },
  {
     name:"Trump International Hotel and Tower, Chicago IL",
    Country:"USA",
imageURL: 'https://i.ibb.co/y4MMGS1/trump-international-hotel.jpg',
playableProperties:{     height:1389,
    floors:70,
    floorspace:2.6,
    buildingtime:4 }
  },
  {
     name:"Tokyo City Hall, Tower 1, Tokyo",
    Country:"Japan",
imageURL: 'https://i.ibb.co/99z6gxN/tokyo-city-hall.jpg',
playableProperties:{     height:799,
    floors:50,
    floorspace:2.1,
    buildingtime:3 }
  },
  {
     name:"Torre Mayor, Mexico City",
    Country:"Mexico",
imageURL: 'https://i.ibb.co/R3vnVRb/torre-mayor-209215.jpg',
playableProperties:{     height:738,
    floors:55,
    floorspace:1.7,
    buildingtime:4 }
  },
  {
     name:"Woolworth Building, New York NY",
    Country:"USA",
imageURL: 'https://i.ibb.co/N1K89T8/woolworth-building.jpg',
playableProperties:{     height:792,
    floors:57,
    floorspace:1.3,
    buildingtime:3 }
  },
  {
     name:"Kingdom Centre, Riyadh",
    Country:"United Arab Emirates",
imageURL: 'https://i.ibb.co/sPRjNhD/kingdom-centre.jpg',
playableProperties:{     height:992,
    floors:41,
    floorspace:2,
    buildingtime:3 }
  },
  {
     name:"Transamerica Pyramid, San Francisco CA",
    Country:"USA",
imageURL: 'https://i.ibb.co/r5Yz4M0/transamerica-pyramid.jpg',
playableProperties:{     height:853,
    floors:48,
    floorspace:0.5,
    buildingtime:3 }
  },
  {
     name:"Trump World Tower, New York NY",
    Country:"USA",
imageURL: 'https://i.ibb.co/d7s05pk/trump-world-tower.jpg',
playableProperties:{     height:861,
    floors:72,
    floorspace:0.9,
    buildingtime:2 }
  },
  {
     name:"The Gherkin, London",
    Country:"United Kingdom",
imageURL: 'https://i.ibb.co/X2JrMJb/the-gherkin.jpg',
playableProperties:{     height:590,
    floors:41,
    floorspace:0.7,
    buildingtime:2 }
  },
  {
     name:"Houses of Parliament, London",
    Country:"United Kingdom",
imageURL: 'https://i.ibb.co/hsTrXH7/houses-of-parliament.jpg',
playableProperties:{     height:323,
    floors:9,
    floorspace:4.6,
    buildingtime:48 }
  },
  {
     name:"Petronas Twin Towers, Kuala Lumpur",
    Country:"Malaysia",
imageURL: 'https://i.ibb.co/92ryp1j/petronas-towers.jpg',
playableProperties:{     height:1463,
    floors:88,
    floorspace:4.3,
    buildingtime:6 }
  },
  {
     name:"Bank of China Tower, Hong Kong",
    Country:"China",
imageURL: 'https://i.ibb.co/3B83T7b/bank-of-china-tower.jpg',
playableProperties:{     height:1205,
    floors:70,
    floorspace:1.5,
    buildingtime:5 }
  },
  {
     name:"Shanghai World Financial Center, Shanghai",
    Country:"China",
imageURL: 'https://i.ibb.co/C6xZfBz/shanghai-world-financial-center.jpg',
playableProperties:{     height:1614,
    floors:101,
    floorspace:4.1,
    buildingtime:11 }
  },
  {
     name:"World Trade Center, New York NY",
    Country:"USA",
imageURL: 'https://i.ibb.co/gJSxzsM/world-trade-center.jpg',
playableProperties:{     height:1368,
    floors:110,
    floorspace:4.3,
    buildingtime:3 }
  },
  {
     name:"Bank of America Tower, New York NY",
    Country:"USA",
imageURL: 'https://i.ibb.co/F0Kp4T7/bank-of-america-tower.jpg',
playableProperties:{     height:1200,
    floors:54,
    floorspace:2.1,
    buildingtime:5 }
  },
  {
     name:"Empire State Building, New York NY",
    Country:"USA",
imageURL: 'https://i.ibb.co/hRZtdnd/empire-state-building.jpg',
playableProperties:{     height:1250,
    floors:102,
    floorspace:2.8,
    buildingtime:1 }
  },
  {
     name:"Willis Tower, Chicago IL",
    Country:"USA",
imageURL: 'https://i.ibb.co/rmrJmYK/willis-tower.png',
playableProperties:{     height:1451,
    floors:108,
    floorspace:4.6,
    buildingtime:3 }
  },
  {
     name:"Burj Al Arab, Dubai",
    Country:"United Arab Emirates",
imageURL: 'https://i.ibb.co/YD6NvtH/burj-al-arab.jpg',
playableProperties:{     height:1053,
    floors:60,
    floorspace:1.2,
    buildingtime:5 }
  },
  {
     name:"Chrysler Building, New York NY",
    Country:"USA",
imageURL: 'https://i.ibb.co/X7bBBH1/chrysler-building.jpg',
playableProperties:{     height:1046,
    floors:77,
    floorspace:1.2,
    buildingtime:2 }
  },
  {
     name:"International Commerce Centre, Hong Kong",
    Country:"China",
imageURL: 'https://i.ibb.co/NTDkT6G/internationa-commerce-centre.jpg',
playableProperties:{     height:1558,
    floors:108,
    floorspace:2.8,
    buildingtime:8 }
  },
  {
     name:"One Canada Square, London",
    Country:"United Kingdom",
imageURL: 'https://i.ibb.co/HzWht7W/one-canada-square.jpg',
playableProperties:{     height:771,
    floors:55,
    floorspace:1.2,
    buildingtime:3 }
  },
  {
     name:"21st Century Tower, Dubai",
    Country:"United Arab Emirates",
imageURL: 'https://i.ibb.co/rQGWZzg/21st-century-tower.jpg',
playableProperties:{     height:883,
    floors:55,
    floorspace:0.9,
    buildingtime:2 }
  },
  {
     name:"The Shard, London",
    Country:"United Kingdom",
imageURL: 'https://i.ibb.co/K2qGyKB/the-shard.jpg',
playableProperties:{     height:1017,
    floors:72,
    floorspace:1.3,
    buildingtime:3 }
  },
  {
     name:"Taipei 101, Taipei",
    Country:"Taiwan",
imageURL: 'https://i.ibb.co/Mc0Skwt/taipei-101.jpg',
playableProperties:{     height:1667,
    floors:101,
    floorspace:4.4,
    buildingtime:5 }
  },
  {
     name:"Leaning Tower of Pisa, Pisa",
    Country:"Italy",
imageURL: 'https://i.ibb.co/Zgz414c/leaning-tower-of-pisa.jpg',
playableProperties:{     height:186,
    floors:8,
    floorspace:1,
    buildingtime:177 }
  },
  {
     name:"Burj Khalifa, Dubai",
    Country:"United Arab Emirates",
imageURL: 'https://i.ibb.co/sgKWPPf/burj-khalifa.jpg',
playableProperties:{     height:2717,
    floors:163,
    floorspace:3.6,
    buildingtime:6 }
  },
  {
     name:"Al Faisaliyah Center, Riyadh",
    Country:"United Arab Emirates",
imageURL: 'https://i.ibb.co/B6FvLWk/al-faisaliyah-center.jpg',
playableProperties:{     height:876,
    floors:30,
    floorspace:0.4,
    buildingtime:3 }
  }]
  }
  ,
  {name: "Simpsons",
  deckImageURL: 'https://i.ibb.co/LYZtkfJ/top-right.jpg',
  deck: [
    {
      name: "Bart Simpson",
      imageURL: 'https://i.ibb.co/Hz3FYSw/Bart.png' ,
      playableProperties:{lovability : 9,
      intellegence : 28,
      fatness: 25,
      nerdiness: 144}
    },
    {
      name: "Patty Bouvier",
      imageURL: 'https://i.ibb.co/chFV4R4/Patty.png' ,
      playableProperties:{lovability: 5,
      intellegence: 29,
      fatness: 43,
      nerdiness: 150}
    },
    {
      name: "Marge Simpson",
      imageURL: 'https://i.ibb.co/0cw77dW/Marge.png',
      playableProperties:{lovability: 9,
      intellegence: 29,
      fatness: 30,
      nerdiness: 146}
    },
    {
      name: "Grandpa",
      imageURL: 'https://i.ibb.co/kSBG09G/Grandpa.png',
      playableProperties:{lovability: 7,
      intellegence: 24,
      fatness: 33,
      nerdiness: 176}
    },
    {
      name:"Lisa Simpson",
      imageURL: 'https://i.ibb.co/mzQqjQx/Lisa.png',
      playableProperties:{lovability: 9.5,
      intellegence: 30,
      fatness: 24,
      nerdiness: 142}
    },
    {
      name: "Homer Simpson",
      imageURL: 'https://i.ibb.co/fVgDQ1j/Homer.png',
      playableProperties:{lovability: 9,
      intellegence: 25,
      fatness: 47,
      nerdiness: 148}
    },
    {
      name: "Maggie Simpson",
      imageURL: 'https://i.ibb.co/ZKY9tgm/Maggie.png',
      playableProperties:{lovability: 10,
      intellegence: 25,
      fatness: 22,
      nerdiness: 174}
    },
    {
      name: "Apu",
      imageURL: 'https://i.ibb.co/pwGG5cb/Apu.png',
      playableProperties:{lovability: 8,
      intellegence: 29.5,
      fatness: 39,
      nerdiness: 152}
    },
    {
      name: "Barney Gumble",
      imageURL: 'https://i.ibb.co/nfdrtpQ/Gumble.png',
      playableProperties:{lovability: 8.5,
      intellegence: 25,
      fatness: 49,
      nerdiness: 186}
    },
    {
      name: "Ned Flanders",
      imageURL: 'https://i.ibb.co/PYxgFTx/Flanders.png',
      playableProperties:{lovability: 5,
      intellegence: 29,
      fatness: 36,
      nerdiness: 198}
    },
    {
      name: "Edna Krabappel",
      imageURL: 'https://i.ibb.co/gWkwPPn/Edna.png',
      playableProperties:{lovability: 4,
      intellegence: 26,
      fatness: 28,
      nerdiness: 162}
    },
    {
      name: "Chief Wiggum",
      imageURL: 'https://i.ibb.co/zF7Mcmr/Wiggum.png',
      playableProperties:{lovability: 7.5,
      intellegence: 24,
      fatness: 48,
      nerdiness: 182}
    },
    {
      name: "Dr Julius Hibbert",
      imageURL: 'https://i.ibb.co/N7DTjxc/Hibbert.png',
      playableProperties:{lovability: 5,
      intellegence: 27,
      fatness: 44,
      nerdiness: 164}
    },
    {
      name: "Itchy & Scratchy",
      imageURL: 'https://i.ibb.co/Jn7gzqM/itchyandscratchy.png',
      playableProperties:{lovability: 7,
      intellegence: 24,
      fatness: 30,
      nerdiness: 156}
    },
    {
      name: "Krusty the Clown",
      imageURL: 'https://i.ibb.co/b2HJbD8/Krusty.png',
      playableProperties:{lovability: 7,
      intellegence: 28.5,
      fatness: 46,
      nerdiness: 154}
    },
    {
      name: "Lenny",
      imageURL: 'https://i.ibb.co/WKFRvp6/Lenny.png',
      playableProperties:{lovability: 8,
      intellegence: 26,
      fatness: 27,
      nerdiness: 194}
    },
    {
      name: "Milhouse Van Houten",
      imageURL: 'https://i.ibb.co/vPMkG8P/Millhouse.png',
      playableProperties:{lovability: 8,
      intellegence: 28.5,
      fatness: 32,
      nerdiness: 188}
    },
    {
      name: "Moe Szyslak",
      imageURL: 'https://i.ibb.co/BLNH0h5/Moe.png',
      playableProperties:{lovability: 7.5,
      intellegence: 27,
      fatness: 22,
      nerdiness: 172}
    },
    {
      name: "C. Montgomery Burns",
      imageURL: 'https://i.ibb.co/WHRr9sz/Burns.png',
      playableProperties:{lovability: 5,
      intellegence: 29,
      fatness: 20,
      nerdiness: 178}
    },
    {
      name: "Martin",
      imageURL: 'https://i.ibb.co/sJL2jHw/Martin.png',
      playableProperties:{lovability: 8,
      intellegence: 28,
      fatness: 45,
      nerdiness: 170}
    },
    {
      name: "Principal Skinner",
      imageURL: 'https://i.ibb.co/kHcLH8V/Skinner.png',
      playableProperties:{lovability: 7,
      intellegence: 27,
      fatness: 32,
      nerdiness: 180}
    },
    {
      name: "Nelson Muntz",
      imageURL: 'https://i.ibb.co/kq6RMpM/Nelson.png',
      playableProperties:{lovability: 3,
      intellegence: 22,
      fatness: 33,
      nerdiness: 140}
    },
    {
      name: "Otto",
      imageURL: 'https://i.ibb.co/kQwr01k/Otto.png',
      playableProperties:{lovability: 6,
      intellegence: 26,
      fatness: 32,
      nerdiness: 184}
    },
    {
      name: "Sherri and Terri",
      imageURL: 'https://i.ibb.co/hCkSFn0/Sherriandterri.png',
      playableProperties:{lovability: 5,
      intellegence: 28,
      fatness: 28,
      nerdiness: 176}
    },
    {
      name: "Sideshow Bob",
      imageURL: 'https://i.ibb.co/6w5nrX1/Sideshow.png',
      playableProperties:{lovability: 8,
      intellegence: 26,
      fatness: 38,
      nerdiness: 190}
    },
    {
      name: "Waylon Smithers",
      imageURL: 'https://i.ibb.co/jkm7kZs/Smithers.png',
      playableProperties:{lovability: 4,
      intellegence: 24,
      fatness: 35,
      nerdiness: 192}
    },
    {
      name: "Snowball ll",
      imageURL: 'https://i.ibb.co/X4mkYxq/Unlock-snowball2.png',
      playableProperties:{lovability: 8.5,
      intellegence: 23.5,
      fatness: 26,
      nerdiness: 158}
    },
    {
      name: "Todd Flanders",
      imageURL: 'https://i.ibb.co/ZmtZDFk/Rod.png',
      playableProperties:{lovability: 6,
      intellegence: 27,
      fatness: 32,
      nerdiness: 196}
    },
    {
      name: "Groundskeeper Willie",
      imageURL: 'https://i.ibb.co/746PLgm/Groundskeeper-Willie.png',
      playableProperties:{lovability: 6,
      intellegence: 24,
      fatness: 35,
      nerdiness: 166}
    },
    {
      name: "Santa's Little Helper",
      imageURL: 'https://i.ibb.co/8dhyvcg/SLH.png',
      playableProperties:{lovability: 8,
      intellegence: 24,
      fatness: 20,
      nerdiness: 160}
    }
  ]}
])
