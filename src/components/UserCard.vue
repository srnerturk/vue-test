<template>
  <div class="user-card">
    <div class="name">
      <p>{{ user.name }} {{ user.surname }}</p>
    </div>
    <div class="contact">
      <p class="email">
        {{ user.email }}
      </p>
      <p class="phone">
        {{ user.phone }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: Object,
  },
  mounted() {
    console.log(this.user);
  },
};
</script>

<style>
.user-card {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
.name {
  padding: 5px;
  flex: 1;
  min-width: 150px;
}
.contact {
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.email,
.phone {
  flex: 1;
}
</style>
