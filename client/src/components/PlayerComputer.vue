<template>
  <div class="card-container">
    <div
    v-if="winningPlayer === 'player-two' || winningPlayer === 'bothCardsShowing'"
    class="card-up">
      <br>
      <p>Breed: {{playerTwoCards[0].name}}</p>
      <img id="catpic" src="../../public/images/Cat.jpg" >

      <p
      :class="selectedProperty === key ? 'selected' : 'property' "
      v-on:click="handleClick(key.toLowerCase())"
      v-for="(value, key) in playerTwoCards[0].playableProperties"
      >
        {{key}}: {{value}}
      </p>
    </div>
    <div
    v-if="winningPlayer === '' || winningPlayer === 'player-one'"
    class="card-down">
    </div>
    <div>
      <p>Cards: {{this.playerTwoCards.length}}</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: 'player-computer',
  props: ['cards', 'winningPlayer', 'selectedProperty'],
  data(){
    return {
      playerTwoCards: this.cards.slice(),
      maxCardValues: this.cards.slice(0,1),
      computerSelectedProperty: '',
      highestRatio: 0
    }
  },
  watch:{
    playerTwoCards: function () {
      if(this.playerTwoCards.length === 0){
        eventBus.$emit('player-two-loses-game')
      }
    }
  },
  mounted(){

    eventBus.$on('playerone-property-selected', (payload) => {
      payload[2] = this.playerTwoCards[0]
      eventBus.$emit('both-cards-sent', payload)
      setTimeout(() => {
        this.playerTwoCards.shift()

        let currentCard = this.playerTwoCards[0].playableProperties
        Object.keys(currentCard).forEach(key => {
          // console.log('in for loop');
          let property = currentCard[key];
          if( property > this.maxCardValues[0].playableProperties[key]) {
            // console.log('property', property);
            // console.log('max', this.maxCardValues[0].playableProperties[key]);
            this.maxCardValues[0].playableProperties[key] = property
          }
        })
      }, 3000)

    })
    eventBus.$on('round-drawn', (lastWinner) => {
      setTimeout(() => {
        let currentCard = this.playerTwoCards[0].playableProperties
        Object.keys(currentCard).forEach(key => {
          // console.log('in for loop');
          let property = currentCard[key];
          if( property > this.maxCardValues[0].playableProperties[key]) {
            // console.log('property', property);
            // console.log('max', this.maxCardValues[0].playableProperties[key]);
            this.maxCardValues[0].playableProperties[key] = property
          }
          if( this.highestRatio < property / this.maxCardValues[0].playableProperties[key]) {
            this.highestRatio = property / this.maxCardValues[0].playableProperties[key];
            this.computerSelectedProperty = key
          }
        },
      )
      // console.log('ratio', this.highestRatio);
      // console.log('selected property', this.computerSelectedProperty);
      this.handleClick(this.computerSelectedProperty),
      this.highestRatio = 0

      }, 6000)
    })

    eventBus.$on('player-two-wins', (payload) => {
      setTimeout(() => {
        for(let card of payload){
          this.playerTwoCards.push(card)
        }
      }, 3000)
      setTimeout(() => {
        let currentCard = this.playerTwoCards[0].playableProperties
        Object.keys(currentCard).forEach(key => {
          // console.log('in for loop');
          let property = currentCard[key];

          if( this.highestRatio < property / this.maxCardValues[0].playableProperties[key]) {
            this.highestRatio = property / this.maxCardValues[0].playableProperties[key];
            this.computerSelectedProperty = key
          }
        },
      )
      // console.log('ratio', this.highestRatio);
      // console.log('selected property', this.computerSelectedProperty);
      this.handleClick(this.computerSelectedProperty),
      this.highestRatio = 0

      }, 6000)

    })
  },
  methods: {
    handleClick(property){
      eventBus.$emit('playertwo-property-selected', [this.playerTwoCards[0], property] )
      setTimeout(() => {
        this.playerTwoCards.shift()

        let currentCard = this.playerTwoCards[0].playableProperties
        Object.keys(currentCard).forEach(key => {
          // console.log('in for loop');
          let property = currentCard[key];
          if( property > this.maxCardValues[0].playableProperties[key]) {
            // console.log('property', property);
            // console.log('max', this.maxCardValues[0].playableProperties[key]);
            this.maxCardValues[0].playableProperties[key] = property
          }
        })

      }, 3000)
    }
  }
}
</script>

<style>

</style>
