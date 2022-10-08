<template>
   <form @submit.prevent>
      <label>Email:</label>
      <input required v-model="email" />
      <label>Password:</label>
      <input type="password" required v-model="password" />
      <button @click="isAuthenticateGuard">LOGIN</button>
    </form>
  </template>
  
  <script>
  import isAuthenticateGuard from "../routes/auth-guard";
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    }, methods:{
      isAuthenticateGuard
    }
  };
  </script>