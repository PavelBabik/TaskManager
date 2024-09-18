<template>
  <div class="modal">
    <div class="modal__actions">
      <div v-if="!noClose" class="modal__button" @click="$emit('closeModal')">
        <inline-svg
          src="/icons/close.svg"
          fill="white"
          width="25"
          height="25"
        />
      </div>
    </div>
    <div class="modal__field">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineEmits(["closeModal"]);
defineProps(["noClose"]);
</script>

<style scoped lang="scss">
.modal {
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__actions {
    width: 100%;
    padding: 15px 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
  }

  &__button {
    cursor: pointer;
  }

  &__field {
    width: 100%;
    max-width: 500px;
    min-width: 320px;
    background-color: whitesmoke;
    border-radius: 6px;
    padding: 15px 25px;
    box-sizing: border-box;
  }
}
</style>
