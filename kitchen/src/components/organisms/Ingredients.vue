<template>
  <div>
    <div :class="$style.container">
      <Ingredient
        v-for="item in getIngredients"
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :id="item.id"
        :isChosen="item.isChosen"
      />
    </div>
  </div>
</template>
<script>
import Ingredient from "../molecules/Ingredient.vue";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getIngredients"]),
  components: {
    Ingredient,
  },
};
</script>

<style lang="scss" module>
.container {
  max-width: 50rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
</style>
