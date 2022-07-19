<template>
  <div class="home">
    <div class="users">
      <user-card v-for="user in getUsers" :user="user" :key="user.id" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import UserCard from "../components/UserCard.vue";
export default {
  name: "Home",
  components: {
    UserCard,
  },
  created() {
    this.fetchUsers();

    console.log("Home created");
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
};
</script>

<style>
.users {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
