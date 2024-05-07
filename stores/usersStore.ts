import { defineStore } from 'pinia';
import usersServer from '~/server/usersServer';

export const useUsersStore = defineStore('UsersStore', {
  state: (): Users => ({
    users: [],
  }),
  getters: {
    usersGetters(state: Users): User[] {
      return state.users;
    }
  },
  actions: {
   async getUsers(): Promise<void> {
      const res = await usersServer.getUsers();
      const {users} = res.content
      this.users.push(...users);
    }
  }
});
