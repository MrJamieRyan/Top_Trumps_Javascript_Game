<template>
  <div>
    <div class="start-game">
      <button id="start-button" v-on:click="startGame">Start Game</button>
    </div>
    <div class="scores">
      <div class="player-one-scores">
        <p>PLAYER ONE</p>
        <p>
          Wins: {{playersRecords.playerOneGamesWon}} -
          Losses: {{playersRecords.playerOneGamesLost}}
        </p>
      </div>
      <div class="player-two-scores">
        <p>PLAYER TWO</p>
        <p>
          Wins: {{playersRecords.playerTwoGamesWon}} -
          Losses: {{playersRecords.playerTwoGamesLost}}
        </p>
      </div>
    </div>
    <div class="winning-statement">
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
import PlayersService from "../../services/PlayersService.js";
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

  data() {
    return {
      playerOneCardsDealt: [],
      playerTwoCardsDealt: [],
      start: false,
      cardsUpForGrabs: [],
      selectedProperty: null,
      winningPlayer: "",
      winningPlayerStatement: "",
      gameWinner: "",
      playersRecords: {
        playerOneGamesWon: 0,
        playerOneGamesLost: 0,
        playerTwoGamesWon: 0,
        playerTwoGamesLost: 0
      }
    };
  },

<<<<<<< HEAD
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
=======
  mounted() {
    this.shuffleCards();
    this.splitCards();

    eventBus.$on("both-cards-sent", payload => {
      this.cardsUpForGrabs.unshift(payload[2]);
      this.cardsUpForGrabs.unshift(payload[0]);
      this.selectedProperty = payload[1];

      if (
        this.cardsUpForGrabs[0][this.selectedProperty] >
        this.cardsUpForGrabs[1][this.selectedProperty]
      ) {
        eventBus.$emit("player-one-wins", this.cardsUpForGrabs);
        this.cardsUpForGrabs = [];
        this.winningPlayer = "bothCardsShowing";
        this.winningPlayerStatement = "Player One Wins This Round!";
        setTimeout(() => {
          this.winningPlayer = "player-one";
          this.winningPlayerStatement = "";
        }, 3000);
      } else if (
        this.cardsUpForGrabs[0][this.selectedProperty] ===
        this.cardsUpForGrabs[1][this.selectedProperty]
      ) {
        let lastWinningPlayer = this.winningPlayer;
        this.winningPlayer = "bothCardsShowing";
        this.winningPlayerStatement = "It's a draw!";
        setTimeout(() => {
          this.winningPlayer = lastWinningPlayer;
          this.winningPlayerStatement = "";
        }, 3000);
      } else {
        eventBus.$emit("player-two-wins", this.cardsUpForGrabs);
        this.cardsUpForGrabs = [];
        this.winningPlayer = "bothCardsShowing";
        this.winningPlayerStatement = "Player Two Wins This Round!";
        setTimeout(() => {
          this.winningPlayer = "player-two";
          this.winningPlayerStatement = "";
        }, 3000);
>>>>>>> origin/jamie
      }
    });

<<<<<<< HEAD
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
=======
    eventBus.$on("player-one-loses-game", () => {
      this.gameWinner = "Player Two Wins The Game!";
      this.start = false;
      this.playerOneGamesLost += 1;
      this.playerTwoGamesWon += 1;
      // this.handleUpdate()
      this.shuffleCards();
      this.splitCards();
    });

    eventBus.$on("player-two-loses-game", () => {
      this.gameWinner = "Player One Wins The Game!";
      this.start = false;
      this.playerTwoGamesLost += 1;
      this.playerOneGamesWon += 1;
      // this.handleUpdate()
      this.shuffleCards();
      this.splitCards();
    });
>>>>>>> origin/jamie
  },

  methods: {
    fetchPlayers() {
      PlayersService.getPlayers().then(
        playersRecords => (this.playersRecords = playersRecords[0])
      );
    },
    //
    handleUpdate(updatedScores){
      // console.log(this.playersRecords, this.playersRecords._id)
      PlayersService.updatePlayers(updatedScores, this.playersRecords._id)
      .then(result => console.log(result))
    },

    startGame() {
<<<<<<< HEAD
      this.start = true
      this.gameWinner = ''

=======
      this.start = true;
      this.gameWinner = "";
      this.fetchPlayers();
>>>>>>> origin/jamie
    },

    splitCards() {
      const numberOfCardsPerPlayer = this.cards.length / 2;
      for (let i = 0; i < numberOfCardsPerPlayer; i++) {
        this.playerOneCardsDealt[i] = this.cards[i];
      }
      for (let i = numberOfCardsPerPlayer; i < this.cards.length; i++) {
        this.playerTwoCardsDealt[i - numberOfCardsPerPlayer] = this.cards[i];
      }
    },

    shuffleCards() {
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
  color: #7E57C2;
  border: 1px;
  background-color: #7E57C2;
  box-shadow:
  /* Top layer shadow */ 0 1px 1px rgba(0, 0, 0, 0.15),
    /* Second layer */ 0 10px 0 -5px #7E57C2,
    /* Second layer shadow */ 0 10px 1px -4px rgba(0, 0, 0, 0.15),
    /* Third layer */ 0 20px 0 -10px #7E57C2,
    /* Third layer shadow */ 0 20px 1px -9px rgba(0, 0, 0, 0.15),
    /* Shadow at bottom */ 0 8px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 20vw;
  height: 30vw;
  border-radius: 10px;
  user-select: none;
}

.card-up {
  color: #6200ee;
  font-size: 20px;
  background: #eee;
  box-shadow:
    /* Top layer shadow */ 0 1px 1px rgba(0, 0, 0, 0.15),
    /* Second layer */ 0 10px 0 -5px #7E57C2,
    /* Second layer shadow */ 0 10px 1px -4px rgba(0, 0, 0, 0.15),
    /* Third layer */ 0 20px 0 -10px #7E57C2,
    /* Third layer shadow */ 0 20px 1px -9px rgba(0, 0, 0, 0.15),
    /* Shadow at bottom */ 0 8px 16px 0 rgba(0, 0, 0, 0.15),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 20vw;
  height: 30vw;
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

.player-one-scores {
  border: 4px solid #C62828;
  background-color: lightgray;
  width: 20vw;
  place-self: center;
}

.player-two-scores {
  border: 4px solid #5C6BC0;
  background-color: lightgray;
  width: 20vw;
  place-self: center;
}

.winning-statement {
  text-align: center;
  font-size: 15px;
  height: 40px;
  place-self: center;
}

.property {
  cursor: pointer;
}
</style>
