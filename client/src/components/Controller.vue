<template>
<div>
 <p>{{cards}}</p>
</div>
</template>

<script>
import { eventBus } from "../main.js";
import PlayerOne from "./PlayerOne.vue";
import PlayerTwo from "./PlayerTwo.vue";
export default {
  name: "controller", 
  props: ["cards"],
  components: { "player-one": PlayerOne, "player-two": PlayerTwo }
};
</script>

<style>
</style>