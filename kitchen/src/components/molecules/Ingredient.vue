<template>
  <div>
    <div
      :class="[$style.card, isChosen ? $style.chosenCard : '']"
      @click="choose"
    >
      <div :class="$style.image">
        <img :src="image" alt="" />
      </div>
      <div :class="$style.title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["chooseCard"]),
    choose() {
      this.chooseCard(this.id);
    },
  },
  props: {
    image: String,
    title: String,
    id: String,
    isChosen: Boolean,
  },
};
</script>

<style lang="scss" module>
.chosenCard {
  border: 0.2rem solid #473002da !important;
}
.card {
  max-width: 12rem;
  border-radius: 0.5rem;
  background-color: #966709da;
  border: 0.2rem solid transparent;
  .image {
    height: 5rem;
    & img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }
  .title {
    padding: 0.5rem;
    color: #fff;
    font-size: 1.1rem;
    text-align: center;
  }
}
</style>
