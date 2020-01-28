<template>
  <div class="card-container">
    <div
    v-if="winningPlayer === 'player-two' || winningPlayer === 'bothCardsShowing'"
    class="card-up">
      <br>
      <p>Breed: {{playerTwoCards[0].name}}</p>
      <img id="catpic" src="../../public/images/Cat.jpg" >


      <p

      :class="selectedProperty === key ? 'selected' : 'property' "


      v-on:click="handleClick(key.toLowerCase())"

      v-for="(value, key) in playerTwoCards[0]"

      v-if="key !== 'name'"
      >

      <!-- :class="winningPlayer === 'player-one' || winningPlayer === 'bothCardsShowing' ? 'not-clickable' : ''" -->

        {{key}}: {{value}}

      </p>
    </div>
    <div
    v-if="winningPlayer === '' || winningPlayer === 'player-one'"
    class="card-down">
    </div>
    <div>
      <p>Cards: {{this.playerTwoCards.length}}</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-two',
  props: ['cards', 'winningPlayer', 'selectedProperty'],
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
      payload[2] = this.playerTwoCards[0]
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
      // let targetProperty = document.getElementById(property).lastElementChild
      // targetProperty.classList.add('property-selected')
      // setTimeout(() => targetProperty.classList.remove('property-selected'), 3000)
      eventBus.$emit('playertwo-property-selected', [this.playerTwoCards[0], property] )
      setTimeout(() => this.playerTwoCards.shift(), 3000)
    }
  }
}
</script>

<style>

</style>
