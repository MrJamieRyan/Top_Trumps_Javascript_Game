<template>
<div>
 <p>{{cards}}</p>
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
      playerTwoCards: []
    }
  },

  mounted(){
    this.splitCards()
  },

  methods: {

    splitCards(){
      const numberOfCardsPerPlayer = this.cards.length / 2
      for (let i = 0; i < numberOfCardsPerPlayer; i++) {
        this.playerOneCards[i] = this.cards[i]
      }
      for (let i = numberOfCardsPerPlayer; i < this.cards.length; i++) {
        this.playerTwoCards[i - numberOfCardsPerPlayer] = this.cards[i]
      }
    }


  }
};
</script>

<style>
</style>
