<template>
  <div>
    <div :class="winningPlayer === 'player-one' || winningPlayer === 'bothCardsShowing' ? 'card-up' : 'card-down'" >
      <p>PLAYER ONE</p>
      <img id="catpic" src="../../public/images/Cat.jpg" >
      <p>Breed: {{cards[0].breed}}</p>
      <p :class="winningPlayer === 'player-two'|| winningPlayer === 'bothCardsShowing' ? 'not-clickable' : ''" v-on:click="handleClick(key.toLowerCase())" v-for="(value, key) in cardWithoutName">
        {{key}}: {{value}}
      </p>
      <!-- <p>Name: {{cards[0].individual}}</p>
      <p v-on:click="handleClick(key)" v-for="key in Object.keys(cards[0]).slice(1)"> {{key}}</p>
      <p v-for="value in cards[0]">{{value}}</p> -->
      <!-- <p> {{cardWithoutName}}</p> -->
    </div>
    <div>
      <p>Cards: {{this.cards.length}}</p>
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
  methods: {
    handleClick(property){

      eventBus.$emit('playerone-property-selected', [this.cards[0], property] )
      // this.cards.shift()
      setTimeout(() => this.cards.shift(), 3001)
    }
  },
  mounted(){

    eventBus.$on('playertwo-property-selected', (payload) => {
      let newPayload = []
      newPayload[0] = this.cards[0]
      newPayload[1] = payload[1]
      newPayload[2] = payload[0]
      eventBus.$emit('both-cards-sent', newPayload)
      // this.cards.shift()
      setTimeout(() => this.cards.shift(), 3001)
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
