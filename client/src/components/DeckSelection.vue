<template>
  <div>
    <h1>Deck Selection</h1>
    <ul>
      <li v-for="deck in decks">{{deck.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['decks']
}
</script>

<style scoped>
</style>
