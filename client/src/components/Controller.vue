<template>
  <div>
    <div class="start-game"> <button id="start-button" v-on:click="startGame">Start Game</button> </div>
    <div class="scores">
      <div class="player-one-scores">
        <p>P1 wins: {{playersRecords.playerOneGamesWon}}</p>
        <p>P1 losses: {{playersRecords.playerOneGamesLost}}</p>
      </div>
      <div class="player-two-scores">
        <p>P2 wins: {{playersRecords.playerTwoGamesWon}}</p>
        <p>P2 losses: {{playersRecords.playerTwoGamesLost}}</p>
      </div>
    </div>
    <div>
      <h1>{{winningPlayerStatement}}</h1>
    </div>
    <div class="players-wrapper">
      <player-one v-if="start" :cards="playerOneCardsDealt" :winningPlayer="winningPlayer" />
      <player-two v-if="start" :cards="playerTwoCardsDealt" :winningPlayer="winningPlayer" />
    </div>
    <div v-if="gameWinner !== ''">
      <h1>{{gameWinner}}</h1>
    </div>
  </div>
</template>

<script>

import PlayersService from "../../services/PlayersService.js"
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
      cardsUpForGrabs: [],
      selectedProperty: null,
      winningPlayer: '',
      winningPlayerStatement: '',
      gameWinner: '',
      playersRecords: {
        playerOneGamesWon: 0,
        playerOneGamesLost: 0,
        playerTwoGamesWon: 0,
        playerTwoGamesLost: 0
      }

    }
  },

  mounted(){
    this.fetchPlayers()
    this.shuffleCards()
    this.splitCards()

    eventBus.$on('both-cards-sent', (payload) => {
      this.cardsUpForGrabs.unshift(payload[2])
      this.cardsUpForGrabs.unshift(payload[0])
      this.selectedProperty = payload[1]


      if(this.cardsUpForGrabs[0][this.selectedProperty] > this.cardsUpForGrabs[1][this.selectedProperty]){
        eventBus.$emit('player-one-wins', this.cardsUpForGrabs)
        this.cardsUpForGrabs = []
        this.winningPlayer = 'bothCardsShowing'
        this.winningPlayerStatement = 'Player One Wins This Round!'
        setTimeout(() => {this.winningPlayer = 'player-one';
          this.winningPlayerStatement = ''}, 3000)
      }

      else if(this.cardsUpForGrabs[0][this.selectedProperty] === this.cardsUpForGrabs[1][this.selectedProperty]){
        let lastWinningPlayer = this.winningPlayer
        this.winningPlayer = 'bothCardsShowing'
        this.winningPlayerStatement = "It's a draw!"
        setTimeout(() => {this.winningPlayer = lastWinningPlayer;
          this.winningPlayerStatement = ''}, 3000)
      }

      else

      {
        eventBus.$emit('player-two-wins', this.cardsUpForGrabs)
        this.cardsUpForGrabs = []
        this.winningPlayer = 'bothCardsShowing'
        this.winningPlayerStatement = 'Player Two Wins This Round!'
        setTimeout(() => {this.winningPlayer = 'player-two';
          this.winningPlayerStatement = ''}, 3000)
      }

    } )

    eventBus.$on('player-one-loses-game', () => {
      this.gameWinner = 'Player Two Wins The Game!'
      this.start = false
      this.playersRecords.playerOneGamesLost += 1
      this.playersRecords.playerTwoGamesWon += 1
      const updatedScores = {
        playerOneGamesLost: this.playersRecords.playerOneGamesLost,
        playerTwoGamesWon: this.playersRecords.playerTwoGamesWon
      }
      this.handleUpdate(updatedScores)
      this.shuffleCards()
      this.splitCards()
    })

    eventBus.$on('player-two-loses-game', () => {
      this.gameWinner = 'Player One Wins The Game!'
      this.start = false
      this.playersRecords.playerTwoGamesLost += 1
      this.playersRecords.playerOneGamesWon += 1
      const updatedScores = {
        playerTwoGamesLost: this.playersRecords.playerTwoGamesLost,
        playerOneGamesWon: this.playersRecords.playerOneGamesWon
      }
      this.handleUpdate(updatedScores)
      this.shuffleCards()
      this.splitCards()
    })
  },

  methods: {

    fetchPlayers() {
      PlayersService.getPlayers()
      .then(playersRecords => this.playersRecords = playersRecords[0])
    },
    //
    handleUpdate(updatedScores){
      // console.log(this.playersRecords, this.playersRecords._id)
      PlayersService.updatePlayers(updatedScores, this.playersRecords._id)
      .then(result => console.log(result))
    },

    startGame() {
      this.start = true
      this.gameWinner = ''

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
    place-self: center;
}

.card-container{
  place-self: center;
}

.card-down {
  width: 20vw;
  height: 30vw;
  background-color: black;
  border: 2px solid black;
  border-radius: 10px;
}

.card-up {
  width: 20vw;
  height: 30vw;
  border: 2px solid black;
  border-radius: 10px;

}

p.not-clickable {
  pointer-events: none;
}

#catpic {
  width: 80%;
}

.property-selected {
  background-color: red;

}

.scores {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
}

.property {
  cursor: pointer;
}

</style>
