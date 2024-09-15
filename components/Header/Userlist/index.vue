<template>
  <div class="userList">
    <div v-if="userStore.users.length" class="userList__list">
      <HeaderUserlistUser v-for="user in userStore.users" :key="user.id" :user="user"/>
    </div>
    <div class="userList__list" v-else>
      No users
    </div>
    <input class="userList__input" type="text" v-model="name">
    <button :class="{error: !name.length}" class="userList__add" @click="addUser">
      Add User
    </button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useUsers} from "~/stores/users.js";
import {uuid} from 'vue-uuid'

// Store
const userStore = useUsers()
// Data
const name = ref('')
const showInput = ref(false)
// Methods
const addUser = () => {
  userStore.addUser(name.value, uuid.v1())
  name.value = ''
  showInput.value = false
}
const showButton = () => {
  showInput.value = !showInput.value
}
const move = (user) => {
  console.log("drag", user)
}

const endDrag = () => {
  console.log("Success!!!")
}
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
    height: 25px;
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 2px solid indianred;
    background-color: transparent;
    color: indianred;
    outline: none;
    padding: 0 15px;
    box-sizing: border-box;

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