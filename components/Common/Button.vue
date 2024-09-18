<template>
  <div class="buttonWrapper" :class="{ small }">
    <button
      class="button"
      @click="$emit('click')"
      :class="{ outlined, notActive }"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
defineProps(["small", "outlined", "notActive", "type"]);
defineEmits(["click"]);
</script>

<style scoped lang="scss">
.buttonWrapper {
  width: 100%;
  &.small {
    width: calc(50% - 5px) !important;
  }
}

.button {
  width: 100%;
  height: 36px;
  border-radius: 3px;
  text-transform: uppercase;
  background-color: indianred;
  color: whitesmoke;
  outline: none;
  border: 2px solid indianred;
  padding: 0 15px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: indianred;
  }

  &.outlined {
    background-color: transparent;
    color: indianred;

    &:hover {
      background-color: indianred;
      color: whitesmoke;
    }
  }
  &.notActive {
    pointer-events: none;
    opacity: 0.6;
  }
}
</style>
