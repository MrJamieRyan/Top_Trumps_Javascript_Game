<template>
  <div class="card-container">
    <div v-if="winningPlayer === 'player-one' || winningPlayer === 'bothCardsShowing' || winningPlayer === ''"
    class="card-up" >
      <br>
      <p>Breed: {{playerOneCards[0].name}}</p>
      <img id="catpic" src="../../public/images/Cat.jpg" >


      <p

      :class="selectedProperty === key ? 'selected' : 'property' "

      v-on:click="handleClick(key)"

      v-for="(value, key) in playerOneCards[0]"

      v-if="key !== 'name'"

      >

        <!-- :class="winningPlayer === 'player-two'|| winningPlayer === 'bothCardsShowing' ? 'not-clickable' : ''" -->

        {{key}}: {{value}}

      </p>

    </div>
    <div
    v-if="winningPlayer === 'player-two'"
    class="card-down">
    </div>
    <div>
      <p>Cards: {{this.playerOneCards.length}}</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-one',
  props: ['cards', 'winningPlayer', 'selectedProperty'],
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
    handleClick(property){

      // let targetProperty = document.querySelectorAll(`[${property}]`)
      // console.log(targetProperty)
      // setTimeout(() => targetProperty.classList.remove('property-selected'), 3000)
      eventBus.$emit('playerone-property-selected', [this.playerOneCards[0], property] )
      setTimeout(() => this.playerOneCards.shift(), 3001)

    }
  },
  mounted(){

    eventBus.$on('playertwo-property-selected', (payload) => {
      let newPayload = []
      newPayload[0] = this.playerOneCards[0]
      newPayload[1] = payload[1]
      newPayload[2] = payload[0]
      eventBus.$emit('both-cards-sent', newPayload)
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
