<template>
  <div>
    <h1 class="main-header">Top Trumps</h1>
    <h2 class="title">Select a deck:</h2>
    <ul class="deck-wrapper">
      <li class="flex-decks" v-on:click="handleDeckSelect(index)" v-for="(deck, index) in decks"
      :class="deckSelectedIndex === index ? 'selected-game-option' : '' ">
        <img class="deck-back" :src="deck.deckImageURL" >
        <p>{{deck.name}}</p>
      </li>
    </ul>
    <h2 class="title">Select a game type:</h2>
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
      deckSelectedIndex: null,
      deckDescriptions: null
    }
  },
  methods: {
    handleDeckSelect(index){
      this.deckSelected = this.decks[index].deck
      this.deckSelectedIndex = index
      this.deckDescriptions = this.decks[index].descriptions
    },
    handleGameSelect(gameType){
      this.gameType = gameType
    },
    handleGameOptions(){
      if(this.gameType && this.deckSelected){
        eventBus.$emit('game-options-selected',
        {
          gameType: this.gameType,
          deck: this.deckSelected,
          descriptions: this.deckDescriptions
       })
      }
    }
  }


}
</script>

<style scoped>

.deck-back {
  width: 200px;
  height: 300px;
  border-radius: 10px;
}

.selected-game-option {
  border: 4px solid #43BBF2;
}

</style>
