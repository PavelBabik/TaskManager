import {defineStore} from "pinia"

export const useUsers = defineStore("users", {
    state: () => ({
        users: []
    }),
    actions: {
        addUser(name, id) {
            let user = {
                name: name,
                id: id
            }
            this.users.push(user)
        }
    }
})