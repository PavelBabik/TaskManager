<template>
  <div draggable="true" @dragend="changeStatus(task)" class="taskCard">
    <h3 class="taskCard__title">{{ task.name }}</h3>
    <div class="taskCard__description">
      {{
        task.description.length < 35
          ? task.description
          : task.description.substring(0, 35) + "..."
      }}
    </div>
    <div class="taskCard__details">
      <div class="taskCard__status">{{ task.status }}</div>
      <div class="taskCard__priority" :class="{ done: task.status === 'DONE' }">
        <inline-svg
          v-if="task.status !== 'DONE' && task.priority > 0"
          src="/icons/danger.svg"
        />
        <inline-svg v-else-if="task.status === 'DONE'" src="/icons/done.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useChangedValues } from "~/stores/changedValues.js";
import { useTasksStore } from "~/stores/tasksStore.js";
import { ref } from "vue";

// Uses
const changedValues = useChangedValues();
const tasksStore = useTasksStore();

// Data
const props = defineProps(["task"]);

// Methods
const changeStatus = (task) => {
  if (changedValues.status !== "" && changedValues.status !== task.status) {
    let changedTask = tasksStore.tasks.find((t) => t.id === task.id);
    changedTask.status = changedValues.status;
  }
};
</script>

<style scoped lang="scss">
.taskCard {
  width: 100%;
  background-color: white;
  border: 1px solid indianred;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  &__details {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &__priority {
    & svg {
      width: 20px;
      height: 20px;
      fill: indianred;
    }
    &.done {
      & svg {
        fill: green;
      }
    }
  }
}
</style>
