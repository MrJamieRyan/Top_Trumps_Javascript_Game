<template>
  <div>
    <p>Name: {{cards[0].individual}}</p>
    <p>Size: {{cards[0].size}}</p>
    <p>Rarity: {{cards[0].rarity}}</p>
    <p>Temper: {{cards[0].temper}}</p>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-two',
  props: ['cards']
}
</script>

<style>

</style>
