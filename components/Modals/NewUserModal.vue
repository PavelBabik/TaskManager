<template>
  <div class="usersModal">
    <h2>
      {{ noUsers ? "To start work add New user to your team" : "Add new user" }}
    </h2>
    <CommonTextInput
      @change="changeName"
      id="userName"
      :value="name"
      label="New User"
    />
    <div class="usersModal__buttons">
      <CommonButton
        v-if="!noUsers"
        :outlined="true"
        :small="true"
        @click="$emit('toggleModal')"
      >
        Cancel
      </CommonButton>
      <CommonButton :small="!noUsers" @click="addUser"> Add</CommonButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUsers } from "~/stores/usersStore.js";
import { uuid } from "vue-uuid";

// Store
const userStore = useUsers();
// Data
const name = ref("");
defineProps(["noUsers"]);
const emit = defineEmits(["toggleModal"]);
// Methods
const changeName = (value) => {
  name.value = value.value;
};
const addUser = () => {
  userStore.addUser(name.value, uuid.v1());
  emit("toggleModal");
};
</script>

<style scoped lang="scss">
.usersModal {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__buttons {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
