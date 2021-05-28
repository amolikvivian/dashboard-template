<template>
  <div class="main-container">
    <div class="top-banner mb-4">
      <img src="../assets/logo.png" alt srcset />
      <h1 class="text-center">Warehouse Dashboard</h1>
    </div>
    <SearchBar class="mb-5" />
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "./../components/Dashboard.vue";
import SearchBar from "./../components/SearchBar.vue";
export default {
  name: "Home",
  components: {
    Dashboard,
    SearchBar,
  },
};
</script>


<style scoped>
.top-banner {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
h1,
img {
  padding: 1rem 0;
  letter-spacing: 1px;
}
img {
  width: 250px;
}
.main-container {
  margin-top: 1%;
  margin-bottom: 2%;
}
</style>