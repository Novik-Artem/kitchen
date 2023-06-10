<template>
  <div :class="$style.menu">
    <span @click="$router.push('/popular')">Popular Recipes </span>
    <span>Saved Resipes</span>
  </div>
</template>

<style lang="scss" module>
.menu {
  display: flex;
  align-items: center;
  color: #fff;
  margin: 0 0 2rem 0;
  background-color: #473002da;
  padding: 2rem;
  & span {
    margin: 0 4rem 0 0;
    font-size: 1.5rem;
    cursor: pointer;
  }
}
</style>
