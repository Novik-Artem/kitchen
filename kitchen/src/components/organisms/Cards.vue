<template>
  <div>
    <div :class="$style.container">
      <Card
        v-for="item in getCards"
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :ingredients="item.ingredients"
        :id="item.id"
        :isOpen="item.isOpen"
      />
    </div>
  </div>
</template>
<script>
import Card from "../molecules/Card.vue";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getCards"]),
  components: {
    Card,
  },
};
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
</style>
