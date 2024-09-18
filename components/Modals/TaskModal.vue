<template>
  <div class="newTask">
    <h2>Create new task</h2>
    <div class="newTask__inputField">
      <CommonTextInput
        @change="changeName"
        :value="task.name"
        id="taskName"
        label="Task Name"
      />
    </div>
    <div class="newTask__inputField">
      <CommonTextArea
        @change="changeDescription"
        :value="task.description"
        label="Task Description"
        id="taskDescription"
      />
    </div>
    <div class="newTask__inputField twoFields">
      <div class="newTask__halfField">
        <div class="newTask__title">Task status</div>
        <div class="newTask__status">{{ status }}</div>
      </div>
      <div class="newTask__halfField">
        <div class="newTask__title">Task priority</div>
        <div
          @click="togglePriority"
          class="newTask__toggle"
          :class="{ priority: task.priority > 0 }"
        >
          <div
            class="newTask__toggleCircle"
            :class="{ priority: task.priority > 0 }"
          ></div>
        </div>
      </div>
    </div>
    <div class="newTask__inputField">
      <div class="newTask__title">Task responsible</div>
      <select
        v-model="task.responsible"
        class="newTask__select"
        name="responsible"
        id="taskResponsible"
      >
        <option v-for="user in userStore.users" :value="user.id" :key="user.id">
          {{ user.name }}
        </option>
      </select>
    </div>
    <div class="newTask__inputField">
      <div class="newTask__title">Task responsible</div>
      <div>
        <div
          class="newTask__checkboxField"
          v-for="user in userStore.users"
          :key="user.id"
        >
          <label>
            <input
              type="checkbox"
              :id="user.id"
              @change="addPerformer(user.id)"
              style="display: none"
            />
            <span class="newTask__label">
              <span
                class="newTask__checkBox"
                :class="{ checked: task.performers.includes(user.id) }"
              ></span>
              <span class="newTask__status">{{ user.name }}</span>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="newTask__buttons">
      <CommonButton @click="$emit('closeModal')" :outlined="true" :small="true">
        Cancel</CommonButton
      >
      <CommonButton @click="addTask" :small="true">Add</CommonButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTasksStore } from "~/stores/tasksStore.js";
import { useUsers } from "~/stores/usersStore.js";
import { uuid } from "vue-uuid";

// Uses
const taskStore = useTasksStore();
const userStore = useUsers();

// Data
const props = defineProps(["status", "task"]);
const emits = defineEmits(["closeModal"]);
const task = ref({
  id: "",
  name: "",
  description: "",
  responsible: "",
  performers: [],
  status: "",
  priority: 0,
});

// Methods
const changeName = (value) => {
  task.value.name = value.value;
};
const changeDescription = (value) => {
  task.value.description = value.value;
};
const addPerformer = (id) => {
  if (!task.value.performers.includes(id)) {
    task.value.performers.push(id);
  } else {
    task.value.performers.splice(task.value.performers.indexOf(id), 1);
  }
};
const togglePriority = () => {
  if (task.value.priority === 0) {
    task.value.priority = 1;
  } else {
    task.value.priority = 0;
  }
};
const addTask = () => {
  task.value.id = uuid.v1();
  task.value.status = props.status;
  taskStore.addTask(task.value);
  emits("closeModal");
};
</script>

<style scoped lang="scss">
.newTask {
  width: 100%;

  &__inputField {
    width: 100%;
    margin-top: 10px;

    &.twoFields {
      display: flex;
      justify-content: space-between;
    }
  }

  &__title {
    color: indianred;
    font-size: 12px;
    font-weight: bold;
    opacity: 0.5;
  }

  &__toggle {
    width: 50px;
    min-width: 50px;
    height: 24px;
    min-height: 24px;
    border-radius: 12px;
    border: 1px solid indianred;
    padding: 2px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    transition: all 0.3s;

    &.priority {
      background-color: indianred;
      justify-content: flex-end;
    }
  }

  &__toggleCircle {
    width: 18px;
    min-width: 18px;
    height: 18px;
    min-height: 18px;
    border-radius: 50%;
    background-color: indianred;
    transition: all 0.3s ease-in-out;

    &.priority {
      background-color: whitesmoke;
    }
  }

  &__status {
    font-size: 14px;
    font-weight: bold;
    user-select: none;
  }

  &__select {
    width: 100%;
    outline: none;
    height: 40px;
    border: 1px solid indianred;
    padding-left: 15px;
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
  }

  &__checkboxField {
    margin-top: 6px;
  }

  &__label {
    width: 100%;
    display: flex;
    align-items: center;
  }

  &__checkBox {
    margin-right: 10px;
    display: block;
    width: 20px;
    min-width: 20px;
    height: 20px;
    min-height: 20px;
    border: 1px solid indianred;
    box-sizing: border-box;
    border-radius: 2px;

    &.checked {
      background-color: indianred;
    }
  }

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
