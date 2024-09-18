<template>
  <div class="header">
    <div class="header__logo">Task Manager</div>
    <HeaderUserlist />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background-color: rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  &__logo {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
  }
}
</style>
