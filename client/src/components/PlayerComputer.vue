<template>
  <div class="card-container">
    <div
    v-if="winningPlayer === 'player-two' || winningPlayer === 'bothCardsShowing'"
    class="card-up">
      <br>
      <p class="property"><span>{{playerTwoCards[0].name}}</span></p>
      <img class="deck-image" :src="playerTwoCards[0].imageURL" >

      <p
      :class="selectedProperty === key ? 'selected' : 'property' "

      v-for="(value, key) in playerTwoCards[0].playableProperties"
      >
        <span>{{key}}: {{value}}</span>
      </p>
    </div>
    <div
    v-if="winningPlayer === '' || winningPlayer === 'player-one'"
    class="card-down">
    </div>
    <div class="cards-left">
      <p>Cards In Deck: {{this.playerTwoCards.length}}</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-computer',
  props: ['cards', 'winningPlayer', 'selectedProperty'],
  data(){
    return {
      playerTwoCards: this.cards.slice(),
      maxCardValues: this.cards.slice(0,1),
      computerSelectedProperty: '',
      highestRatio: 0
    }
  },
  watch:{
    playerTwoCards: function () {
      if(this.playerTwoCards.length === 0){
        eventBus.$emit('player-two-loses-game')
      }
    }
  },
  mounted(){
    // other player has sent card across
    eventBus.$on('playerone-property-selected', (payload) => {
      payload.playerTwoCard = this.playerTwoCards[0]
      eventBus.$emit('both-cards-sent', payload)
      //after 3000ms when cards have been compared remove card from array
      //then update max card values with new top card
      setTimeout(() => {
        this.playerTwoCards.shift(),
        this.updateMaxCardValues()
      }, 3000)
    })
    // drawn game signal sent down from controller
    eventBus.$on('round-drawn', (lastWinner) => {
      // if this player was previous winner then will carry on picking cards
      if(lastWinner === 'player-two')
      //after 6000ms max card values updated and the best property selected
      //this is then passed to the handleClick method and ratio set to zero for next timeout
      setTimeout(() => {
        this.updateMaxCardValues()
        this.calculateSelectedProperty()
        this.handleClick(this.computerSelectedProperty),
        this.highestRatio = 0
      }, 6000)
    })
    //player two has won and receives cards
    eventBus.$on('player-two-wins', (payload) => {
      setTimeout(() => {
        //loops through cards sent down and pushed them into players array
        for(let card of payload){
          this.playerTwoCards.push(card)
        }
      }, 3000)
      //after 6000ms decide which property to select and pass this on to handleClick
      setTimeout(() => {
        this.calculateSelectedProperty()
        this.handleClick(this.computerSelectedProperty),
        this.highestRatio = 0
      }, 6000)
    })
  },
  methods: {
    //function for computer selecting a property and sending it on eventBus
    handleClick(property){
      eventBus.$emit('playertwo-property-selected', {playerTwoCard: this.playerTwoCards[0], property: property} )
      setTimeout(() => {
        this.playerTwoCards.shift();
        this.updateMaxCardValues()
      }, 3000)
    },
    //function for updating maxCardValues when a new card is available to look at
    updateMaxCardValues() {
      let currentCard = this.playerTwoCards[0].playableProperties
      Object.keys(currentCard).forEach(key => {
        let property = currentCard[key];
        if( property > this.maxCardValues[0].playableProperties[key]) {
          this.maxCardValues[0].playableProperties[key] = property
        }
      })
    },
    // using ratios of current card / max card values selects best property
    calculateSelectedProperty() {
      let currentCard = this.playerTwoCards[0].playableProperties
      Object.keys(currentCard).forEach(key => {
        let property = currentCard[key];
        if( this.highestRatio < property / this.maxCardValues[0].playableProperties[key]) {
          this.highestRatio = property / this.maxCardValues[0].playableProperties[key];
          this.computerSelectedProperty = key
        }
      },
    )
    }
  }
}
</script>

<style>

</style>
