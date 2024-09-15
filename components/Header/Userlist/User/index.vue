<template>
  <div class="profile">
    <inline-svg src="/icons/profile.svg"/>
  </div>
</template>

<script setup>
const props = defineProps(['user'])
</script>

<style scoped lang="scss">
.profile {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid indianred;

  & svg {
    width: 14px;
    height: 14px;
    fill: indianred;
  }
}
</style>