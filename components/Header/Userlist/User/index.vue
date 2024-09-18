<template>
  <div class="profile">
    <div class="profile__icon">
      <inline-svg src="/icons/profile.svg" />
    </div>
    <div class="profile__name" v-if="full">{{ user.name }}</div>
  </div>
</template>

<script setup>
const props = defineProps(["user", "full"]);
</script>

<style scoped lang="scss">
.profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  border-radius: 50%;

  &__icon {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid indianred;
  }

  & svg {
    width: 14px;
    height: 14px;
    fill: indianred;
  }

  &__name {
    margin-left: 15px;
  }
}
</style>
