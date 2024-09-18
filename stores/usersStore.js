import { defineStore } from "pinia";

export const useUsers = defineStore("users", {
  state: () => ({
    users: [],
  }),
  actions: {
    addUser(name, id) {
      this.users.push({ name, id });
    },
  },
});
