import { defineStore } from "pinia";

export const useTaskStatus = defineStore("taskStatus", {
  state: () => ({
    taskStatuses: [],
  }),
  actions: {
    addStatus(id, name) {
      this.taskStatuses.push({ id, name });
    },
  },
});
