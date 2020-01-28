<template>
  <controller :cards="cards" />
</template>

<script>
import CardDecksService from '../services/CardDecksService.js'
import Controller from "./components/Controller.vue"
import {eventBus} from "./main.js"
export default {
  name: "app",
  components: {
    "controller": Controller
  },
  mounted(){
    this.fetchDecks()
  },
  methods: {
    fetchDecks() {
      CardDecksService.getDecks()
      .then(decks => this.decks = decks)
    }
  }
  ,
  data() {
    return {
      decks: []

    }
  }
};
</script>

<style>


</style>
