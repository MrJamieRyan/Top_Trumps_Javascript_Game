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
     individual:"Abyssinian",
    size:2,
    rarity:4,
    temper:2

  },
  {
     individual:"American Bobtail",
    size:4,
    rarity:6,
    temper:4

  },
  {
     individual:"American Curl",
    size:2,
    rarity:7,
    temper:5

  },
  {
     individual:"Balinese (aka Javanese)",
    size:3,
    rarity:8,
    temper:4

  },
  {
     individual:"Bengal",
    size:4,
    rarity:1,
    temper:3

  },
  {
     individual:"Bombay",
    size:3,
    rarity:2,
    temper:5

  },
  {
     individual:"British Shorthair",
    size:4,
    rarity:1,
    temper:4

  },
  {
     individual:"Devon Rex",
    size:2,
    rarity:7,
    temper:5
  },
  {
     individual:"Egyptian Mau",
    size:3,
    rarity:7,
    temper:2
  },
  {
     individual:"Japanese Bobtail",
    size:3,
    rarity:8,
    temper:5
  },
  {
     individual:"LOL Cats",
    size:3,
    rarity:1,
    temper:3

  },
  {
     individual:"Maine Coon",
    size:5,
    rarity:2,
    temper:4

  },
  {
     individual:"Manx",
    size:4,
    rarity:9,
    temper:3

  },
  {
     individual:"Norwegian Forest",
    size:5,
    rarity:3,
    temper:5

  },
  {
     individual:"Persian",
    size:4,
    rarity:2,
    temper:5

  },
  {
     individual:"Ocicat",
    size:3,
    rarity:7,
    temper:4

  },
  {
     individual:"Ragdoll",
    size:4,
    rarity:5,
    temper:5

  },
  {
     individual:"Ragamuffin",
    size:5,
    rarity:6,
    temper:4

  },
  {
     individual:"Russian Blue",
    size:2,
    rarity:8,
    temper:3

  },
  {
     individual:"Savannah",
    size:3,
    rarity:9,
    temper:3

  },
  {
     individual:"Scottish Fold",
    size:2,
    rarity:8,
    temper:5

  },
  {
     individual:"Selkirk Rex",
    size:3,
    rarity:6,
    temper:4

  },
  {
     individual:"Siamese",
    size:2,
    rarity:3,
    temper:5

  },
  {
     individual:"Siberian",
    size:4,
    rarity:6,
    temper:3

  },
  {
     individual:"Singapura",
    size:1,
    rarity:7,
    temper:4

  },
  {
     individual:"Sphynx",
    size:3,
    rarity:9,
    temper:4

  },
  {
     individual:"Gumball",
    size:1,
    rarity:5,
    temper:7

  },
  {
     individual:"Tiger",
    size:6,
    rarity:10,
    temper:0

  },
  {
     individual:"Turkish Van",
    size:4,
    rarity:8,
    temper:2

  },
  {
     individual:"Stray Cat",
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
