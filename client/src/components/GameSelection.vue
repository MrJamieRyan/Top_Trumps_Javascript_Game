<template>
  <div>
    <h1 class="main-header">Top Trumps</h1>
    <h2 class="main-header">Deck Selection</h2>
    <ul class="deck-wrapper">
      <li class="flex-decks" v-on:click="handleDeckSelect(index)" v-for="(deck, index) in decks">{{deck.name}}</li>
    </ul>
    <h2 class="main-header">Game Selection</h2>
    <ul class="game-type-wrapper">
      <li v-on:click="handleGameSelect('player-player')"  >Player 1 vs Player 2</li>
      <li v-on:click="handleGameSelect('player-computer')" >Player 1 vs Computer</li>
    </ul>
    <button v-on:click="handleGameOptions()"  type="button">Submit</button>
  </div>
</template>

<script>

import { eventBus } from "../main.js";
export default {

  props: ['decks'],
  data(){
    return{
      gameType: null,
      deckSelected: null
    }
  },
  methods: {
    handleDeckSelect(index){
      this.deckSelected = this.decks[index].deck
    },
    handleGameSelect(gameType){
      console.log(gameType);
      this.gameType = gameType
    },
    handleGameOptions(){
      if(this.gameType && this.deckSelected){
        eventBus.$emit('game-options-selected', { gameType: this.gameType, deck: this.deckSelected })
      }
    }
  }


}
</script>

<style scoped>
</style>
