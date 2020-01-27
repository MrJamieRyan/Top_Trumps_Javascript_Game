<template>
  <div>
    <div class="start-game"> <button id="start-button" v-on:click="startGame">Start Game</button> </div>
    <div>
      <h1>{{winningPlayerStatement}}</h1>
    </div>
    <div class="players-wrapper">
      <player-one v-if="start" :cards="playerOneCardsDealt" :winningPlayer="winningPlayer"/>
      <player-two v-if="start" :cards="playerTwoCardsDealt" :winningPlayer="winningPlayer"/>
    </div>
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
      playerOneCardsDealt: [],
      playerTwoCardsDealt: [],
      start: false,
      playerOneSelectedCard: null,
      playerTwoSelectedCard: null,
      selectedProperty: null,
      winningPlayer: '',
      winningPlayerStatement: ''
    }
  },

  mounted(){
    this.shuffleCards()
    this.splitCards()

    eventBus.$on('both-cards-sent', (payload) => {
      this.playerOneSelectedCard = payload[0]
      this.playerTwoSelectedCard = payload[2]
      this.selectedProperty = payload[1]
      if(this.playerOneSelectedCard[this.selectedProperty] > this.playerTwoSelectedCard[this.selectedProperty]){
        eventBus.$emit('player-one-wins', [this.playerOneSelectedCard, this.playerTwoSelectedCard])
        this.winningPlayer = 'bothCardsShowing'
        this.winningPlayerStatement = 'Player One Wins This Round!'
        setTimeout(() => {this.winningPlayer = 'player-one';
          this.winningPlayerStatement = ''}, 3000)
      }
      else
      {
        eventBus.$emit('player-two-wins', [this.playerOneSelectedCard, this.playerTwoSelectedCard])
        this.winningPlayer = 'bothCardsShowing'
        this.winningPlayerStatement = 'Player Two Wins This Round!'
        setTimeout(() => {this.winningPlayer = 'player-two';
          this.winningPlayerStatement = ''}, 3000)
      }

    } )
  },

  methods: {

    startGame() {
      this.start = true
    },

    splitCards(){
      const numberOfCardsPerPlayer = this.cards.length / 2
      for (let i = 0; i < numberOfCardsPerPlayer; i++) {
        this.playerOneCardsDealt[i] = this.cards[i]
      }
      for (let i = numberOfCardsPerPlayer; i < this.cards.length; i++) {
        this.playerTwoCardsDealt[i - numberOfCardsPerPlayer] = this.cards[i]
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

#start-button {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
}

*{
  font-family: 'Roboto', sans-serif;
}

.start-game{
  text-align: center;

}

.players-wrapper{
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;

}

.card-down {
  width: 20vw;
  height: 30vw;
  background-color: black;
  margin-left: 9rem;
  margin-right: 9rem;
  border: 2px solid black;
  border-radius: 10px;

}

.card-up {
  width: 20vw;
  height: 30vw;
  margin-left: 9rem;
  margin-right: 9rem;
  border: 2px solid black;
  border-radius: 10px;
}

p.not-clickable {
  pointer-events: none;
}

#catpic {
  width: 80%;
}

</style>
