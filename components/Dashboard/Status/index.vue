<template>
  <div class="status" @dragenter="statusChange(status)">
    <div class="status__name">{{ status }}</div>
    <div
      @click="toggleTaskModal(task)"
      class="status__task"
      v-for="task in getTasksByStatus(status)"
      :key="task.id"
    >
      <TasksCard :task="task" />
    </div>
    <CommonButton
      @click="toggleModal"
      :outlined="true"
      :notActive="setActive()"
      >{{ setActive() ? "Create team" : "Add Task" }}</CommonButton
    >
    <CommonModal @closeModal="closeModal" v-if="showModal">
      <ModalsTaskModal @closeModal="closeModal" :status="status" />
    </CommonModal>
    <CommonModal @closeModal="closeTaskModal" v-if="showTask">
      <ModalsTaskViewModal @closeModal="closeTaskModal" :task="taskToShow" />
    </CommonModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTasksStore } from "~/stores/tasksStore.js";
import { useChangedValues } from "~/stores/changedValues.js";
import { useUsers } from "~/stores/usersStore.js";

// Uses
const taskStore = useTasksStore();
const changedStore = useChangedValues();
const userStore = useUsers();

// Data
const showModal = ref(false);
const props = defineProps(["status"]);
const showTask = ref(false);
const taskToShow = ref();

// Methods
const statusChange = (status) => {
  changedStore.setChangedStatus(status);
};
const toggleModal = () => {
  showModal.value = !showModal.value;
};

const closeModal = () => {
  showModal.value = false;
};
const getTasksByStatus = (taskStatus) => {
  let sortedTasks = taskStore.tasks.filter(
    (task) => task.status === taskStatus,
  );
  return sortedTasks.sort((a, b) => b.priority - a.priority);
};
const setActive = () => {
  return userStore.users.length === 0;
};
const toggleTaskModal = (task) => {
  taskToShow.value = task;
  showTask.value = true;
};
const closeTaskModal = () => {
  showTask.value = false;
};
</script>

<style scoped lang="scss">
.status {
  min-width: 310px;

  &__name {
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  &__task {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
