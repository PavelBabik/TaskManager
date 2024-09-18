<template>
  <div class="dashboard">
    <Header />
    <Dashboard />
    <CommonModal
      :noClose="true"
      @closeModal="closeUserModal"
      v-if="showNewUserModal"
    >
      <ModalsNewUserModal
        @toggleModal="closeUserModal"
        :noUsers="showNewUserModal"
      />
    </CommonModal>
  </div>
</template>
<script setup lang="js">
import { ref, onMounted } from "vue";
import { useUsers } from "~/stores/usersStore.js";

// Uses
const userStore = useUsers();

// Data
const showNewUserModal = ref(false);

// Methods
const closeUserModal = () => {
  showNewUserModal.value = false;
};
onMounted(() => {
  if (!userStore.users.length) {
    showNewUserModal.value = true;
  }
});
</script>
<style scoped lang="scss">
.dashboard {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: darkgray;
  overflow: hidden;
  background-image: url("/public/sunset.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
