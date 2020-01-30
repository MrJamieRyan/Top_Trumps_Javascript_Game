<template>
  <div class="card-container">
    <div
    v-if="winningPlayer === 'player-two' || winningPlayer === 'bothCardsShowing'"
    class="card-up">
      <br>
      <p class="property"><span>{{playerTwoCards[0].name}}</span></p>
      <img class="deck-image" :src="playerTwoCards[0].imageURL" >
      <p :class="selectedProperty === key ? 'selected' : 'property' "
      v-on:click="handleClick(key.toLowerCase())"
      v-for="(value, key) in playerTwoCards[0].playableProperties" >
        <span>{{deckDescriptions[key]}}: {{value}}</span>
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
  name: 'player-two',
  props: ['cards', 'winningPlayer', 'selectedProperty', 'deckDescriptions'],
  data(){
    return {
      playerTwoCards: this.cards.slice()
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

    eventBus.$on('playerone-property-selected', (payload) => {
      payload.playerTwoCard = this.playerTwoCards[0]
      eventBus.$emit('both-cards-sent', payload)
      setTimeout(() => this.playerTwoCards.shift(), 3000)
    })

    eventBus.$on('player-two-wins', (payload) => {
      setTimeout(() => {
        for(let card of payload){
          this.playerTwoCards.push(card)
        }
      }, 3000)
    })
  },

  methods: {
    handleClick(property){
      eventBus.$emit('playertwo-property-selected', {playerTwoCard: this.playerTwoCards[0], property: property} )
      setTimeout(() => this.playerTwoCards.shift(), 3000)
    }
  }
}
</script>

<style>


</style>
