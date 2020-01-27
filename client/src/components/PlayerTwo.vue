<template>
  <div>
    <div :class="winningPlayer === 'player-two' || winningPlayer === 'bothCardsShowing' ? 'card-up' : 'card-down'" >
      <p>PLAYER TWO</p>
      <img id="catpic" src="../../public/images/Cat.jpg" >
      <p>Breed: {{playerTwoCards[0].name}}</p>

      <p :class="winningPlayer === 'player-one' || winningPlayer === 'bothCardsShowing' ? 'not-clickable' : ''"

      v-on:click="handleClick(key.toLowerCase())"

      v-for="(value, key) in playerTwoCards[0]"

      v-if="key !== 'name'"
      >

        {{key}}: {{value}}

      </p>
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
  props: ['cards', 'winningPlayer'],
  data(){
    return {
      playerTwoCards: this.cards.slice()
    }
  },
  watch:{
    playerTwoCards: function () {
      if(this.playerTwoCards.length === 0){
        eventBus.$emit('player-two-loses')
      }
    }
  },
  mounted(){

    eventBus.$on('playerone-property-selected', (payload) => {
      payload[2] = this.playerTwoCards[0]
      eventBus.$emit('both-cards-sent', payload)
      setTimeout(() => this.playerTwoCards.shift(), 3001)
    })

    eventBus.$on('player-two-wins', (payload) => {
      this.playerTwoCards.push(payload[0])
      this.playerTwoCards.push(payload[1])
    })
  },
  methods: {
    handleClick(property){
      eventBus.$emit('playertwo-property-selected', [this.playerTwoCards[0], property] )
      setTimeout(() => this.playerTwoCards.shift(), 3001)
    }
  }
}
</script>

<style>

</style>
