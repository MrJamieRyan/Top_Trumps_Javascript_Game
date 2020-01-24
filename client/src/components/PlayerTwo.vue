<template>
  <div>
    <p>player two</p>
    <p v-on:click="handleClick(key)" v-for="(value, key) in cards[0]"> {{key}}: {{value}} </p>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-two',
  props: ['cards'],
  mounted(){

    eventBus.$on('playerone-property-selected', (payload) => {
      payload[2] = this.cards[0]
      eventBus.$emit('both-cards-sent', payload)
      this.cards.shift()
    })

    eventBus.$on('player-two-wins', (payload) => {
      this.cards.push(payload[0])
      this.cards.push(payload[1])
    })
  },
  methods: {
    handleClick(property){
      eventBus.$emit('playertwo-property-selected', [this.cards[0], property] )
      this.cards.shift()
    }
  }
}
</script>

<style>

</style>
