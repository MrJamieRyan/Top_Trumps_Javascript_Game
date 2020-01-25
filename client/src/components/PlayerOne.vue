<template>
  <div :class="winningPlayer === 'player-one' || winningPlayer === 'both cards showing' ? '' : 'loosing-player'"  >
    <p>PLAYER ONE</p>
    <p v-on:click="handleClick(key)" v-for="(value, key) in cards[0]"> {{key}}: {{value}} </p>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-one',
  props: ['cards', 'winningPlayer'],
  methods: {
    handleClick(property){

      eventBus.$emit('playerone-property-selected', [this.cards[0], property] )
      this.cards.shift()


    }
  },
  mounted(){

    eventBus.$on('playertwo-property-selected', (payload) => {
      let newPayload = []
      newPayload[0] = this.cards[0]
      newPayload[1] = payload[1]
      newPayload[2] = payload[0]
      eventBus.$emit('both-cards-sent', newPayload)
      this.cards.shift()
    })

    eventBus.$on('player-one-wins', (payload) => {
      this.cards.push(payload[0])
      this.cards.push(payload[1])

    })
  }
}
</script>

<style>

</style>
