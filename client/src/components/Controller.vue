<template>
  <div>
    <div class="start-game"> <button id="start-button" v-on:click="startGame">Start Game</button> </div>
    <div class="winning-statement">
      <h1>{{winningPlayerStatement}}</h1>
    </div>
    <div class="players-wrapper">
      <player-one v-if="start" :cards="playerOneCardsDealt" :winningPlayer="winningPlayer" :selectedProperty="selectedProperty"/>
      <player-two v-if="start && gameType === 'player-player'" :cards="playerTwoCardsDealt" :winningPlayer="winningPlayer" :selectedProperty="selectedProperty"/>
      <player-computer v-if="start && gameType === 'player-computer'" :cards="playerTwoCardsDealt" :winningPlayer="winningPlayer" :selectedProperty="selectedProperty"/>
    </div>
    <div class="scores">
      <div v-if="start" class="player-one-scores">
        <p>Player 1 (Wins: {{playersRecords.playerTwoGamesWon}} Losses: {{playersRecords.playerTwoGamesLost}})</p>
      </div>
      <div v-if="start" class="player-one-scores">
        <p>Player 2 (Wins: {{playersRecords.playerTwoGamesWon}} Losses: {{playersRecords.playerTwoGamesLost}})</p>
      </div>
    </div>
    <div v-if="gameWinner !== ''">
      <h1>{{gameWinner}}</h1>
    </div>
  </div>
</template>

<script>

import PlayersService from "../../services/PlayersService.js"
import { eventBus } from "../main.js";
import PlayerComputer from "./PlayerComputer.vue";
import PlayerOne from "./PlayerOne.vue";
import PlayerTwo from "./PlayerTwo.vue";
export default {
  name: "controller",
  props: ["cards", "gameType"],
  components: {
    "player-one": PlayerOne,
    "player-two": PlayerTwo,
    "player-computer": PlayerComputer
  },

  data(){
    return {
      playerOneCardsDealt: [],
      playerTwoCardsDealt: [],
      start: false,
      cardsUpForGrabs: [],
      selectedProperty: '',
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


      if(this.cardsUpForGrabs[0].playableProperties[this.selectedProperty] > this.cardsUpForGrabs[1].playableProperties[this.selectedProperty]){
        eventBus.$emit('player-one-wins', this.cardsUpForGrabs)
        this.cardsUpForGrabs = []
        this.winningPlayer = 'bothCardsShowing'
        this.winningPlayerStatement = 'Player One Wins This Round!'
        setTimeout(() => {this.winningPlayer = 'player-one';
          this.winningPlayerStatement = ''
          this.selectedProperty = ''}, 3000)
      }

      else if(this.cardsUpForGrabs[0].playableProperties[this.selectedProperty] === this.cardsUpForGrabs[1].playableProperties[this.selectedProperty]){
        let lastWinningPlayer = this.winningPlayer
        eventBus.$emit('round-drawn', lastWinningPlayer)
        this.winningPlayer = 'bothCardsShowing'
        this.winningPlayerStatement = "It's a draw!"
        setTimeout(() => {this.winningPlayer = lastWinningPlayer;
          this.winningPlayerStatement = ''
          this.selectedProperty = ''}, 3000)
      }

      else

      {
        eventBus.$emit('player-two-wins', this.cardsUpForGrabs)
        this.cardsUpForGrabs = []
        this.winningPlayer = 'bothCardsShowing'
        this.winningPlayerStatement = 'Player Two Wins This Round!'
        setTimeout(() => {this.winningPlayer = 'player-two';
          this.winningPlayerStatement = '';
          this.selectedProperty = ''}, 3000)
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

body {
  background-color: lightgray;
}

#start-button {
  font-family: "Kanit", sans-serif;
  border: 4px solid #00897B;
  background-color: white;
  color: #4caf50;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
}

#start-button:hover {
  font-family: "Kanit", sans-serif;
  border: 4px solid;
  background-color: #00897B;
  color: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

* {
  font-family: "Kanit", sans-serif;
}

.start-game {
  text-align: center;

}

.players-wrapper {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-self: center;
}

.card-container {
  place-self: center;
}

.card-down {
  color: #197278;
  border: 1px;
  background-color: #197278;
  box-shadow:
  /* Top layer shadow */ 0 1px 1px rgba(0, 0, 0, 0.15),
    /* Second layer */ 0 10px 0 -5px #197278,
    /* Second layer shadow */ 0 10px 1px -4px rgba(0, 0, 0, 0.15);
  width: 20vw;
  height: 30vw;
  border-radius: 10px;
  user-select: none;
  border: 1px solid black;
}

.card-up {
  color: #6200ee;
  font-size: 20px;
  background: #eee;
  box-shadow:
    /* Top layer shadow */ 0 1px 1px rgba(0, 0, 0, 0.15),
    /* Second layer */ 0 10px 0 -5px #197278,
    /* Second layer shadow */ 0 10px 1px -4px rgba(0, 0, 0, 0.15);
  width: 20vw;
  height: 30vw;
  border-radius: 10px;
    border: 1px solid black;
}

p.not-clickable {
  pointer-events: none;
}

.deck-image {
  height: 30%;
  width: auto;
}

.property-selected {
  background-color: red;
}

.scores {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
}

.player-one-scores {

  color: #283D3B;
  place-self: center;
}

.player-one-scores > p {

  margin: 0px
}

.player-two-scores {

  background-color: orange  ;
  place-self: center;

}

.winning-statement {
  text-align: center;
  font-size: 15px;
  height: 40px;
  place-self: center;
}

.property >span {
  cursor: pointer;
  color: #1f1f1f;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
}


button:focus {
  outline:0;
}

.game-selected{
  text-align: center;
}

.game-selected > button{
  font-family: "Kanit", sans-serif;
  border: 4px solid #00897B;
  background-color: white;
  color: #4caf50;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
}

.game-selected > button:hover{
  font-family: "Kanit", sans-serif;
  border: 4px solid;
  background-color: #00897B;
  color: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.selected > span {
  background-color: #c97951;
  color: #1f1f1f;
  font-family: 'Raleway', sans-serif;
}

.deck-wrapper{
  display: flex;
  list-style-type: none;
  justify-content: center;
  padding-inline-start: 0;
  margin-top: 0px;
}

.game-type-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style-type: none;
  justify-content: center;
  padding-inline-start: 0px;
  grid-gap: 50px;
  margin-top: 20px;
}

.game-type-wrapper > li {
  text-align: center;
  width: 100px;
  height: 50px;
  border: 2px solid black;
  padding: 10px;
  padding-top: 20px;
  box-shadow: 10px 10px 5px 0px;

}

.game-type-wrapper > li:hover {
  cursor: pointer;
}

.flex-decks:hover{
  cursor: pointer;
}

.game-type-wrapper > li:first-child{
  place-self: end;
}

.main-header {
  text-align: center;
  margin-bottom: 60px;
  font-size: 40px;
}

.title {
  text-align: center;
  margin-bottom: 0px;
}

.flex-decks {
  border: 2px solid black;
  margin: 50px;
  margin-bottom: 80px;
  box-shadow: 10px 10px 5px 0px;
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 8fr 1fr;
  grid-gap: 10px;
  margin-top: 20px;
  border-radius: 12px;
}

.flex-decks > p{
 text-align: center
}

.cards-left > p {
  font-size: 20px;
  margin: 40px;
  color: #C44536;
}

</style>
