<template>
  <div :class="$style.card">
    <div :class="$style.image">
      <img :src="image" alt="" />
    </div>
    <div :class="$style.title">{{ title }}</div>
    <ul v-for="item in ingredients" :key="item" :class="$style.ingredients">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    ingredients: Array,
  },
};
</script>

<style lang="scss" module>
.card {
  max-width: 12rem;
  border-radius: 0.5rem;
  background-color: #daacac;
  .image {
    height: 9rem;
    & img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }
  .title {
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    letter-spacing: 0.4rem;
    padding: 0.5rem;
  }
  .ingredients {
    color: #fff;
    & li {
      font-size: 1.1rem;
    }
  }
}
</style>
