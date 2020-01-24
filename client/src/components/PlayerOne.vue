<template>
  <div>
    <p v-on:click="handleClick(key)" v-for="(value, key) in cards[0]"> {{key}}: {{value}} </p>
    <!-- <p v-for="">Size: {{cards[0].size}}</p>
    <p>Rarity: {{cards[0].rarity}}</p>
    <p>Temper: {{cards[0].temper}}</p> -->
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-one',
  props: ['cards'],
  methods: {
    handleClick(property){
      eventBus.$emit('property-selected', this.cards[0], property )
    }
  }
}
</script>

<style>

</style>
