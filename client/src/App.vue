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
     Individual:"Abyssinian",
    Size:2,
    Rarity:4,
    Temper:2
   
  },
  {
     Individual:"American Bobtail",
    Size:4,
    Rarity:6,
    Temper:4
   
  },
  {
     Individual:"American Curl",
    Size:2,
    Rarity:7,
    Temper:5
   
  },
  {
     Individual:"Balinese (aka Javanese)",
    Size:3,
    Rarity:8,
    Temper:4
   
  },
  {
     Individual:"Bengal",
    Size:4,
    Rarity:1,
    Temper:3
   
  },
  {
     Individual:"Bombay",
    Size:3,
    Rarity:2,
    Temper:5
   
  },
  {
     Individual:"British Shorthair",
    Size:4,
    Rarity:1,
    Temper:4
   
  },
  {
     Individual:"Devon Rex",
    Size:2,
    Rarity:7,
    Temper:5
  },
  {
     Individual:"Egyptian Mau",
    Size:3,
    Rarity:7,
    Temper:2
  },
  {
     Individual:"Japanese Bobtail",
    Size:3,
    Rarity:8,
    Temper:5
  },
  {
     Individual:"LOL Cats",
    Size:3,
    Rarity:1,
    Temper:3
   
  },
  {
     Individual:"Maine Coon",
    Size:5,
    Rarity:2,
    Temper:4
   
  },
  {
     Individual:"Manx",
    Size:4,
    Rarity:9,
    Temper:3
   
  },
  {
     Individual:"Norwegian Forest",
    Size:5,
    Rarity:3,
    Temper:5
   
  },
  {
     Individual:"Persian",
    Size:4,
    Rarity:2,
    Temper:5
   
  },
  {
     Individual:"Ocicat",
    Size:3,
    Rarity:7,
    Temper:4
   
  },
  {
     Individual:"Ragdoll",
    Size:4,
    Rarity:5,
    Temper:5
   
  },
  {
     Individual:"Ragamuffin",
    Size:5,
    Rarity:6,
    Temper:4
   
  },
  {
     Individual:"Russian Blue",
    Size:2,
    Rarity:8,
    Temper:3
   
  },
  {
     Individual:"Savannah",
    Size:3,
    Rarity:9,
    Temper:3
   
  },
  {
     Individual:"Scottish Fold",
    Size:2,
    Rarity:8,
    Temper:5
   
  },
  {
     Individual:"Selkirk Rex",
    Size:3,
    Rarity:6,
    Temper:4
   
  },
  {
     Individual:"Siamese",
    Size:2,
    Rarity:3,
    Temper:5
   
  },
  {
     Individual:"Siberian",
    Size:4,
    Rarity:6,
    Temper:3
   
  },
  {
     Individual:"Singapura",
    Size:1,
    Rarity:7,
    Temper:4
   
  },
  {
     Individual:"Sphynx",
    Size:3,
    Rarity:9,
    Temper:4
   
  },
  {
     Individual:"Gumball",
    Size:1,
    Rarity:5,
    Temper:7
   
  },
  {
     Individual:"Tiger",
    Size:6,
    Rarity:10,
    Temper:0
   
  },
  {
     Individual:"Turkish Van",
    Size:4,
    Rarity:8,
    Temper:2
   
  },
  {
     Individual:"Stray Cat",
    Size:3,
    Rarity:1,
    Temper:5
   
  }]
    };
  }
};
</script>

<style>
</style>