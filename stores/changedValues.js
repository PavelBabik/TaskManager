import { defineStore } from "pinia";

export const useChangedValues = defineStore("changed-values", {
  state: () => ({
    status: "",
    taskId: "",
  }),
  actions: {
    setChangedStatus(status) {
      this.status = status;
    },
    setTaskId(id) {
      this.taskId = id;
    },
  },
});
