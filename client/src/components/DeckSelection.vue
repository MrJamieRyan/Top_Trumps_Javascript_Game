<template>
  <div>
    <h1>Deck Selection</h1>
    <ul>
      <li v-on:click="handleDeckSelect(index)" v-for="(deck, index) in decks">{{deck.name}}</li>
    </ul>
  </div>
</template>

<script>

import { eventBus } from "../main.js";
export default {

  props: ['decks'],
  methods: {
    handleDeckSelect(index){
      eventBus.$emit('deck-selected', this.decks[index].deck)
    }
  }

}
</script>

<style scoped>
</style>
