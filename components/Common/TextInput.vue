<template>
  <div class="input__field">
    <label class="input__label">
      <input
        type="text"
        v-model="changed"
        class="input__input"
        :name="id"
        required
      />
      <span class="input__label-text">{{ label }}</span>
    </label>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

// Data
const props = defineProps(["id", "value", "label"]);
const emit = defineEmits(["change"]);
const changed = ref("");

// Methods
const change = () => {
  emit("change", changed);
};

// Watchers
watch(changed, () => {
  change();
});
watch(
  () => props.value,
  () => {
    if (props.value !== "") {
      changed.value = props.value;
    }
  },
);
// Lifecycles
onMounted(() => {
  if (props.value !== "") {
    changed.value = props.value;
  }
});
</script>

<style scoped lang="scss">
.input__field {
  width: 100%;
  position: relative;

  .input__label {
    height: 40px;
  }

  .input__input {
    width: 100%;
    outline: none;
    height: 40px;
    border: 1px solid indianred;
    padding-left: 15px;
    padding-top: 10px;
    box-sizing: border-box;
    border-radius: 3px;
  }

  .input__label-text {
    position: absolute;
    top: 2px;
    left: 10px;
    font-size: 12px;
    opacity: 0.5;
    color: indianred;
  }
}
</style>
