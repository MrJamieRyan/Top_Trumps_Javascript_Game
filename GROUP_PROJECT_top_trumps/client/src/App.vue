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
    name: "Abyssinian",
    size:2,
    rarity:4,
    temper:2

  },
  {
    name: "American Bobtail",
    size:4,
    rarity:6,
    temper:4

  },
  {
    name: "American Curl",
    size:2,
    rarity:7,
    temper:5

  },
  {
    name: "Balinese (aka Javanese)",
    size:3,
    rarity:8,
    temper:4

  },
  {
    name: "Bengal",
    size:4,
    rarity:1,
    temper:3

  },
  {
    name: "Bombay",
    size:3,
    rarity:2,
    temper:5

  },
  {
    name: "British Shorthair",
    size:4,
    rarity:1,
    temper:4

  },
  {
    name: "Devon Rex",
    size:2,
    rarity:7,
    temper:5
  },
  {
    name: "Egyptian Mau",
    size:3,
    rarity:7,
    temper:2
  },
  {
    name: "Japanese Bobtail",
    size:3,
    rarity:8,
    temper:5
  },
  {
    name: "LOL Cats",
    size:3,
    rarity:1,
    temper:3

  },
  {
    name: "Maine Coon",
    size:5,
    rarity:2,
    temper:4

  },
  {
    name: "Manx",
    size:4,
    rarity:9,
    temper:3

  },
  {
    name: "Norwegian Forest",
    size:5,
    rarity:3,
    temper:5

  },
  {
    name: "Persian",
    size:4,
    rarity:2,
    temper:5

  },
  {
    name: "Ocicat",
    size:3,
    rarity:7,
    temper:4

  },
  {
    name: "Ragdoll",
    size:4,
    rarity:5,
    temper:5

  },
  {
    name: "Ragamuffin",
    size:5,
    rarity:6,
    temper:4

  },
  {
    name: "Russian Blue",
    size:2,
    rarity:8,
    temper:3

  },
  {
    name: "Savannah",
    size:3,
    rarity:9,
    temper:3

  },
  {
    name: "Scottish Fold",
    size:2,
    rarity:8,
    temper:5

  },
  {
    name: "Selkirk Rex",
    size:3,
    rarity:6,
    temper:4

  },
  {
    name: "Siamese",
    size:2,
    rarity:3,
    temper:5

  },
  {
    name: "Siberian",
    size:4,
    rarity:6,
    temper:3

  },
  {
    name: "Singapura",
    size:1,
    rarity:7,
    temper:4

  },
  {
    name: "Sphynx",
    size:3,
    rarity:9,
    temper:4

  },
  {
    name: "Gumball",
    size:1,
    rarity:5,
    temper:7

  },  
  {
    name: "Tiger",
    size:6,
    rarity:10,
    temper:0

  },
  {
    name: "Turkish Van",
    size:4,
    rarity:8,
    temper:2

  },
  {
    name: "Stray Cat",
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
