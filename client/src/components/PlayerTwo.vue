<template>
  <div :class="winningPlayer === 'player-two' || winningPlayer === 'bothCardsShowing' ? 'card-up' : 'card-down'" >
    <p>PLAYER TWO</p>
    <p>Breed: {{cards[0].breed}}</p>
    <p :class="winningPlayer === 'player-one' || winningPlayer === 'bothCardsShowing' ? 'no-text' : ''" v-on:click="handleClick(key.toLowerCase())" v-for="(value, key) in cardWithoutName"> {{key}}: {{value}} </p>
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
        'Size': this.cards[0].size,
        'Rarity': this.cards[0].rarity,
        'Temper': this.cards[0].temper
      }
    }
  },
  watch: {
    cards: function() {
      this.cardWithoutName = {
        'Size': this.cards[0].size,
        'Rarity': this.cards[0].rarity,
        'Temper': this.cards[0].temper
      }
    }
  },
  mounted(){

    eventBus.$on('playerone-property-selected', (payload) => {
      payload[2] = this.cards[0]
      eventBus.$emit('both-cards-sent', payload)
      setTimeout(() => this.cards.shift(), 3001)
    })

    eventBus.$on('player-two-wins', (payload) => {
      this.cards.push(payload[0])
      this.cards.push(payload[1])
    })
  },
  methods: {
    handleClick(property){
      eventBus.$emit('playertwo-property-selected', [this.cards[0], property] )
      setTimeout(() => this.cards.shift(), 3001)
    }
  }
}
</script>

<style>

</style>
