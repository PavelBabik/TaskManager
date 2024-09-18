<template>
  <div class="userList">
    <div v-if="userStore.users.length" class="userList__list">
      <HeaderUserlistUser
        v-for="user in userStore.users"
        :key="user.id"
        :user="user"
      />
    </div>
    <div class="userList__list" v-else>No users</div>
    <div class="userList__add">
      <CommonButton @click="toggleUsersModal" :outlined="true"
        >Add New User</CommonButton
      >
    </div>
    <CommonModal v-if="showUsersModal" @closeModal="toggleUsersModal">
      <ModalsNewUserModal @toggleModal="toggleUsersModal" />
    </CommonModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUsers } from "~/stores/usersStore.js";
import { uuid } from "vue-uuid";

// Uses
const userStore = useUsers();
// Data
const name = ref("");
const showUsersModal = ref(false);
// Methods
const addUser = () => {
  userStore.addUser(name.value, uuid.v1());
  name.value = "";
};
const toggleUsersModal = () => {
  showUsersModal.value = !showUsersModal.value;
};
</script>

<style scoped lang="scss">
.userList {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
  }

  &__input {
    height: 25px;
    border: none;
    outline: none;
  }

  &__add {
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
      width: 25px;
      height: 25px;
      fill: indianred;
    }

    &.error {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}
</style>
