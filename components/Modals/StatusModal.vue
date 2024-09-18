<template>
  <div class="modalWindow">
    <CommonTextInput
      id="status"
      :value="statusName"
      label="New Field"
      @change="change"
    />
    <div class="modalWindow__buttons">
      <CommonButton
        @click="$emit('toggleModal')"
        :small="true"
        :outlined="true"
      >
        Cancel
      </CommonButton>
      <CommonButton @click="addTaskStatus(statusName)" :small="true">
        Add
      </CommonButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { uuid } from "vue-uuid";

const emits = defineEmits(["toggleModal"]);
const taskStatuses = useTaskStatus();
const statusName = ref("");
const change = (value) => {
  statusName.value = value;
};
const addTaskStatus = (name) => {
  taskStatuses.addStatus(uuid.v1(), name);
  emits("toggleModal");
};
</script>

<style scoped lang="scss">
.modalWindow {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
