<template>
  <div>
    <div :class="winningPlayer === 'player-one' || winningPlayer === 'bothCardsShowing' ? 'card-up' : 'card-down'" >
      <p>PLAYER ONE</p>
      <img id="catpic" src="../../public/images/Cat.jpg" >
      <p>Breed: {{playerOneCards[0].name}}</p>

      <p :class="winningPlayer === 'player-two'|| winningPlayer === 'bothCardsShowing' ? 'not-clickable' : ''"

      v-on:click="handleClick(key.toLowerCase())"

      v-for="(value, key) in playerOneCards[0]"

      v-if="key !== 'name'"

      >

        {{key}}: {{value}}

      </p>

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
  props: ['cards', 'winningPlayer'],
  data(){
    return {
      playerOneCards: this.cards
    }
  },
  watch: {
    cards: function() {
      this.playerOneCards = this.cards
    }
  },
  methods: {
    handleClick(property){

      eventBus.$emit('playerone-property-selected', [this.playerOneCards[0], property] )
      // this.cards.shift()
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
      // this.cards.shift()
      setTimeout(() => this.playerOneCards.shift(), 3001)
    })

    eventBus.$on('player-one-wins', (payload) => {
      this.playerOneCards.push(payload[0])
      this.playerOneCards.push(payload[1])

    })
  }
}
</script>

<style>

</style>
