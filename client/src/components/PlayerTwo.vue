<template>
  <div>
    <!-- <p>Name: {{cards[1].individual}}</p>
    <p>Size: {{cards[0].size}}</p>
    <p>Rarity: {{cards[0].rarity}}</p>
    <p>Temper: {{cards[0].temper}}</p> -->
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-two',
  props: ['cards'],
  mounted(){

    eventBus.$on('property-selected', (payload) => {
      payload[2] = this.cards[0]
      eventBus.$emit('both-cards-sent', payload)
    })
  }
}
</script>

<style>

</style>
