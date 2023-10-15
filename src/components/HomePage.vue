<template>
  <div class="page-wrapper">
    <header>
      <h1>Welcome to the IE Bank!</h1>
    </header>
    <main>
      <button class="btn" @click="goToAccounts">Go to Accounts</button>
      <button class="btn" @click="goToSkull">Go to Skull</button>
    </main>
    <footer>
      <p>&copy; 2023 IE Bank. All rights reserved.</p>
    </footer>
  </div>
</template>
  
  <script>
  export default {
    methods: {
      goToAccounts() {
        this.$router.push('/accounts');
      },
      goToSkull() {
        this.$router.push('/skull');
      }
    }
  }
  </script>
  
  <style scoped>
  .page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* make sure it takes at least the whole height of the viewport */
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  header {
    background-color: #1155a3;
    color: white;
    padding: 15px 0;
    font-size: 24px;
  }
  
  main {
    flex: 1; /* allows main content to expand and push footer down */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .btn {
    background-color: #1155a3;
    color: white;
    padding: 15px 25px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #133475;
  }
  
  footer {
    background-color: #f1f1f1;
    padding: 10px 0;
    text-align: center;
  }
  
  footer p {
    margin: 0;
    color: #555;
  }
  </style>
  
  