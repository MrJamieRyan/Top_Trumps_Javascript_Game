<template>
  <controller :cards="cards" />
</template>

<script>
import Controller from "./components/Controller.vue"
import {eventBus} from "./main.js"
export default {
  name: "app",
  components: {
    "controller": Controller
  },
  data() {
    return {
      cards:
      [
  {
    breed:"Abyssinian",
    size:2,
    rarity:4,
    temper:2

  },
  {
    breed:"American Bobtail",
    size:4,
    rarity:6,
    temper:4

  },
  {
    breed:"American Curl",
    size:2,
    rarity:7,
    temper:5

  },
  {
    breed:"Balinese (aka Javanese)",
    size:3,
    rarity:8,
    temper:4

  },
  {
    breed:"Bengal",
    size:4,
    rarity:1,
    temper:3

  },
  {
    breed:"Bombay",
    size:3,
    rarity:2,
    temper:5

  },
  {
    breed:"British Shorthair",
    size:4,
    rarity:1,
    temper:4

  },
  {
    breed:"Devon Rex",
    size:2,
    rarity:7,
    temper:5
  },
  {
    breed:"Egyptian Mau",
    size:3,
    rarity:7,
    temper:2
  },
  {
    breed:"Japanese Bobtail",
    size:3,
    rarity:8,
    temper:5
  },
  {
    breed:"LOL Cats",
    size:3,
    rarity:1,
    temper:3

  },
  {
    breed:"Maine Coon",
    size:5,
    rarity:2,
    temper:4

  },
  {
    breed:"Manx",
    size:4,
    rarity:9,
    temper:3

  },
  {
    breed:"Norwegian Forest",
    size:5,
    rarity:3,
    temper:5

  },
  {
    breed:"Persian",
    size:4,
    rarity:2,
    temper:5

  },
  {
    breed:"Ocicat",
    size:3,
    rarity:7,
    temper:4

  },
  {
    breed:"Ragdoll",
    size:4,
    rarity:5,
    temper:5

  },
  {
    breed:"Ragamuffin",
    size:5,
    rarity:6,
    temper:4

  },
  {
    breed:"Russian Blue",
    size:2,
    rarity:8,
    temper:3

  },
  {
    breed:"Savannah",
    size:3,
    rarity:9,
    temper:3

  },
  {
    breed:"Scottish Fold",
    size:2,
    rarity:8,
    temper:5

  },
  {
    breed:"Selkirk Rex",
    size:3,
    rarity:6,
    temper:4

  },
  {
    breed:"Siamese",
    size:2,
    rarity:3,
    temper:5

  },
  {
    breed:"Siberian",
    size:4,
    rarity:6,
    temper:3

  },
  {
    breed:"Singapura",
    size:1,
    rarity:7,
    temper:4

  },
  {
    breed:"Sphynx",
    size:3,
    rarity:9,
    temper:4

  },
  {
    breed:"Gumball",
    size:1,
    rarity:5,
    temper:7

  },
  {
    breed:"Tiger",
    size:6,
    rarity:10,
    temper:0

  },
  {
    breed:"Turkish Van",
    size:4,
    rarity:8,
    temper:2

  },
  {
    breed:"Stray Cat",
    size:3,
    rarity:1,
    temper:5

  }]
    };
  }
};
</script>

<style>


</style>
