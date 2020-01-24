<template>
<div>
  <button v-on:click="startGame">Start Game</button>
  <player-one v-if="start" :cards="playerOneCards"/>
  <player-two v-if="start" :cards="playerTwoCards"/>
</div>
</template>

<script>
import { eventBus } from "../main.js";
import PlayerOne from "./PlayerOne.vue";
import PlayerTwo from "./PlayerTwo.vue";
export default {
  name: "controller",
  props: ["cards"],
  components: {
    "player-one": PlayerOne,
    "player-two": PlayerTwo
  },

  data(){
    return {
      playerOneCards: [],
      playerTwoCards: [],
      start: false
    }
  },

  mounted(){
    this.shuffleCards()
    this.splitCards()
  },

  methods: {

    startGame() {
      this.start = true
    },

    splitCards(){
      const numberOfCardsPerPlayer = this.cards.length / 2
      for (let i = 0; i < numberOfCardsPerPlayer; i++) {
        this.playerOneCards[i] = this.cards[i]
      }
      for (let i = numberOfCardsPerPlayer; i < this.cards.length; i++) {
        this.playerTwoCards[i - numberOfCardsPerPlayer] = this.cards[i]
      }
    },

    shuffleCards(){

    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }

    }


  }
};
</script>

<style>
</style>
