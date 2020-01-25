<template>
  <div :class="winningPlayer === 'player-two' || winningPlayer === 'both cards showing' ? '' : 'loosing-player'" >
    <p>PLAYER TWO</p>
    <p>Name: {{cards[0].individual}}</p>
    <p v-on:click="handleClick(key)" v-for="(value, key) in cardWithoutName"> {{key}}: {{value}} </p>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-two',
  props: ['cards', 'winningPlayer'],
  data(){
    return {
      cardWithoutName: {
        'size': this.cards[0].size,
        'rarity': this.cards[0].rarity,
        'temper': this.cards[0].temper
      }
    }
  },
  watch: {
    cards: function() {
      this.cardWithoutName = {
        'size': this.cards[0].size,
        'rarity': this.cards[0].rarity,
        'temper': this.cards[0].temper
      }
    }
  },
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
