<template>
  <div id="app" :class="$style.app">
    <Cards />
    <div>
      <button :class="$style.button" @click="find">find recipes</button>
    </div>
    <Ingredients />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Cards from "./components/organisms/Cards.vue";
import Ingredients from "./components/organisms/Ingredients.vue";
export default {
  methods: {
    ...mapMutations(["showNeededCards"]),
    find() {
      this.showNeededCards();
    },
  },
  components: {
    Cards,
    Ingredients,
  },
};
</script>

<style lang="scss" module>
body {
  margin: 0;
}
.app {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #dfad49;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  .button {
    background-color: #966709da;
    color: #fff;
    cursor: pointer;
    border: none;
    padding: 1rem 3rem;
    font-size: 1.3rem;
    border-radius: 0.5rem;
  }
}
</style>
