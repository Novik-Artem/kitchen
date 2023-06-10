<template>
  <div :class="$style.card">
    <div :class="$style.image">
      <img :src="image" alt="" />
    </div>
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.content">
      <div :class="isOpen ? $style.arrowDown : $style.arrow" @click="open">
        <svg
          fill="#fff"
          width="40px"
          height="40px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z"
          ></path>
        </svg>
      </div>
      <ul
        v-for="item in ingredients"
        :key="item"
        :class="isOpen ? $style.open : $style.ingredients"
      >
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["openMenu"]),
    open() {
      this.openMenu(this.id);
    },
  },
  props: {
    image: String,
    title: String,
    ingredients: Array,
    id: String,
    isOpen: Boolean,
  },
};
</script>

<style lang="scss" module>
.card {
  max-width: 12rem;
  border-radius: 0.5rem;
  background-color: #966709da;
  .image {
    height: 9rem;
    & img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }
  .content {
    text-align: center;
    cursor: pointer;
    .arrow {
      background-color: #473002da;
    }
    .arrowDown {
      transform: rotate(180deg);
      background-color: #473002da;
    }
  }
  .title {
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem;
  }
  .ingredients {
    display: none;
  }
  .open {
    display: block;
    color: #fff;
    & li {
      font-size: 1.1rem;
      text-align: left;
    }
  }
}
</style>
