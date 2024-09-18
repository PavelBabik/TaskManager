<template>
  <div class="textarea">
    <label class="textarea__field">
      <textarea
        class="textarea__textarea"
        v-model="changed"
        required
        :name="id"
        rows="6"
      />
      <span class="textarea__label-text">{{ label }}</span>
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
.textarea {
  width: 100%;
  position: relative;

  &__field {
    width: 100%;
  }

  &__textarea {
    width: 100%;
    outline: none;
    border: 1px solid indianred;
    padding-left: 15px;
    padding-top: 10px;
    box-sizing: border-box;
    border-radius: 3px;
  }

  &__label-text {
    position: absolute;
    top: 2px;
    left: 10px;
    font-size: 12px;
    opacity: 0.5;
    color: indianred;
  }
}
</style>
