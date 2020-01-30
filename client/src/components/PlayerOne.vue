<template>
  <div class="card-container">
    <div v-if="winningPlayer === 'player-one' || winningPlayer === 'bothCardsShowing' || winningPlayer === ''"
    class="card-up" >
      <br>
      <p class="property"><span>{{playerOneCards[0].name}}</span></p>
      <img class="deck-image" :src="playerOneCards[0].imageURL" >
      <p :class="selectedProperty === key ? 'selected' : 'property' "
      v-on:click="handleClick(key)"
      v-for="(value, key) in playerOneCards[0].playableProperties">
        <span>{{deckDescriptions[key]}}: {{value}}</span>
      </p>
    </div>
    <div
    v-if="winningPlayer === 'player-two'"
    class="card-down">
    </div>
    <div class="cards-left">
      <p>Cards In Deck: {{this.playerOneCards.length}}</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-one',
  props: ['cards', 'winningPlayer', 'selectedProperty', 'deckDescriptions'],
  data(){
    return {
      playerOneCards: this.cards.slice()
    }
  },
  watch:{
    playerOneCards: function () {
      if(this.playerOneCards.length === 0){
        eventBus.$emit('player-one-loses-game')
      }
    }
  },
  methods: {
    // method for emitting that a property has been selected
    handleClick(property){
      eventBus.$emit('playerone-property-selected', {playerOneCard: this.playerOneCards[0], property: property} )
      setTimeout(() => this.playerOneCards.shift(), 3001)
    }
  },
  mounted(){

    eventBus.$on('main-menu', () => {
      this.playerOneCards = []
    })

    eventBus.$on('playertwo-property-selected', (payload) => {
      payload.playerOneCard = this.playerOneCards[0]
      eventBus.$emit('both-cards-sent', payload)
      setTimeout(() => this.playerOneCards.shift(), 3001)
    })

    eventBus.$on('player-one-wins', (payload) => {
      setTimeout(() => {
        for(let card of payload){
          this.playerOneCards.push(card)
        }
      }, 3000)
    })


  }
}
</script>

<style>



</style>
