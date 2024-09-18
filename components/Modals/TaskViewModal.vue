<template>
  <div class="taskView">
    <h2>{{ task.name }}</h2>
    <div class="taskView__field">
      <h3>Task description</h3>
      <div class="taskView__description">
        {{ task.description }}
      </div>
    </div>
    <div class="taskView__field">
      <h3>Task details</h3>
      <div class="taskView__details">
        <div class="taskView__status">{{ task.status }}</div>
        <div
          class="taskView__priority"
          :class="{ done: task.status === 'DONE' }"
        >
          <inline-svg
            v-if="task.status !== 'DONE' && task.priority > 0"
            src="/icons/danger.svg"
          />
          <inline-svg
            v-else-if="task.status === 'DONE'"
            src="/icons/done.svg"
          />
        </div>
      </div>
    </div>
    <div class="taskView__field">
      <h3>Task responsible</h3>
      <div class="taskView__responsible">
        <HeaderUserlistUser
          :full="true"
          :user="getUserById(task.responsible)"
        />
      </div>
    </div>
    <div class="taskView__field">
      <h3>Task performers</h3>
      <div class="taskView__performers">
        <HeaderUserlistUser
          v-for="(user, index) in task.performers"
          :key="index"
          :user="getUserById(user)"
          :full="true"
        />
      </div>
    </div>
    <div class="taskView__field">
      <CommonButton :outlined="true" @click="$emit('closeModal')"
        >Close</CommonButton
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUsers } from "~/stores/usersStore.js";

// Uses
const userStore = useUsers();

// Data
const props = defineProps(["task"]);
const emits = defineEmits(["closeModal"]);

// Methods
const getUserById = (id) => {
  let user = userStore.users.find((user) => user.id === id);
  return user;
};
</script>

<style scoped lang="scss">
.taskView {
  width: 100%;
  h2 {
    margin-bottom: 20px;
  }
  &__field {
    width: 100%;
    margin-bottom: 15px;
    h3 {
      font-size: 12px;
      color: indianred;
      font-weight: bold;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__description {
    width: 100%;
    font-size: 14px;
  }
  &__details {
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
