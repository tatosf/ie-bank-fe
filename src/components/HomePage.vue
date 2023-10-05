<template>
    <div class="home-page">
      <h1>Welcome to the IE Bank!</h1>
      <button @click="goToAccounts">Go to Accounts</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToAccounts() {
        this.$router.push('/accounts');
      }
    }
  }
  </script>
  
  <style scoped>
  .home-page {
    text-align: center;
    margin-top: 50px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  