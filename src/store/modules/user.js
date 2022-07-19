import axios from "axios";
const state = {
  users: [],
};
const getters = {
  getUsers: (state) => state.users,
};
const mutations = {
  setUsers: (state, users) => {
    state.users = users;
  },
};
const actions = {
  fetchUsers: async ({ commit }) => {
    const client = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });
    const response = await client.get("/users/");
    commit("setUsers", response.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
