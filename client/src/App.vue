<template>
  <div>
    <deck-selection v-if="!deckSelected" :decks="decks" />
    <controller v-if="deckSelected" :cards="cards" />
  </div>
</template>

<script>
import DeckSelection from './components/DeckSelection.vue'
import CardDecksService from '../services/CardDecksService.js'
import Controller from "./components/Controller.vue"
import {eventBus} from "./main.js"
export default {
  name: "app",
  components: {
    "controller": Controller,
    "deck-selection": DeckSelection
  },
  data() {
    return {
      decks: [],
      cards: [],
      deckSelected: false
    }
  },
  mounted(){
    this.fetchDecks()

    eventBus.$on('deck-selected', (payload) => {
      this.cards = payload
      this.deckSelected = true
    })
  },
  methods: {
    fetchDecks() {
      CardDecksService.getDecks()
      .then(decks => this.decks = decks)
    }
  }
};
</script>

<style>


</style>
