<template>
  <div class="card-container">
    <div v-if="winningPlayer === 'player-one' || winningPlayer === 'bothCardsShowing' || winningPlayer === ''"
    class="card-up" >
      <br>
      <p class="property"><span>{{playerCards[0].name}}</span></p>
      <img class="deck-image" :src="playerCards[0].imageURL" >
      <p :class="selectedProperty === key ? 'selected' : 'property' "
      v-on:click="handleClick(key)"
      v-for="(value, key) in playerCards[0].playableProperties">
        <span>{{key}}: {{value}}</span>
      </p>
    </div>
    <div
    v-if="winningPlayer === 'player-two'"
    class="card-down">
    </div>
    <div class="cards-left">
      <p>Cards In Deck: {{this.playerCards.length}}</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-one',
  props: ['cards', 'winningPlayer', 'selectedProperty', 'playerString'],
  data(){
    return {
      playerCards: this.cards.slice()
      playerString: this.playerString
    }
  },
  watch:{
    playerCards: function () {
      if(this.playerCards.length === 0){
        eventBus.$emit(`${playerString}-loses-game`)
      }
    }
  },
  methods: {
    // method for emitting that a property has been selected
    handleClick(property){
      eventBus.$emit(`${playerString}-property-selected`, {playerOneCard: this.playerCards[0], property: property} )
      setTimeout(() => this.playerCards.shift(), 3001)
    }
  },
  mounted(){

    eventBus.$on('playertwo-property-selected', (payload) => {

      payload.playerOneCard = this.playerCards[0]
      eventBus.$emit('both-cards-sent', payload)
      setTimeout(() => this.playerCards.shift(), 3001)
    })

    eventBus.$on('player-one-wins', (payload) => {
      setTimeout(() => {
        for(let card of payload){
          this.playerCards.push(card)
        }
      }, 3000)
    })


  }
}
</script>

<style>



</style>
