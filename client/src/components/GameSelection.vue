<template>
  <div>
    <h1 class="main-header">Top Trumps</h1>
    <h2 class="main-header">Deck Selection</h2>
    <ul class="deck-wrapper">
      <li class="flex-decks" v-on:click="handleDeckSelect(index)" v-for="(deck, index) in decks"
      :class="deckSelectedIndex === index ? 'selected-game-option' : '' ">
        <img class="deck-image" :src="deck.deckImageURL" >
      </li>
    </ul>
    <h2 class="main-header">Game Selection</h2>
    <ul class="game-type-wrapper">
      <li v-on:click="handleGameSelect('player-player')"  :class="gameType === 'player-player' ? 'selected-game-option' : '' " >Player 1 vs Player 2</li>
      <li v-on:click="handleGameSelect('player-computer')" :class="gameType === 'player-computer' ? 'selected-game-option' : '' " >Player 1 vs Computer</li>
    </ul>
    <div class="game-selected"><button v-on:click="handleGameOptions()"  type="button">PLAY!</button></div>
  </div>
</template>

<script>

import { eventBus } from "../main.js";
export default {

  props: ['decks'],
  data(){
    return{
      gameType: null,
      deckSelected: null,
      deckSelectedIndex: null
    }
  },
  methods: {
    handleDeckSelect(index){
      this.deckSelected = this.decks[index].deck
      this.deckSelectedIndex = index
    },
    handleGameSelect(gameType){
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

.deck-image {
  width: 200px;
  height: 300px;
}

.selected-game-option {
  border: 4px solid red;
}

</style>
