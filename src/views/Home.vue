<template>
  <div v-if="loading" class="center">
    <div class="spinner-border text-danger" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
  <transition name="fade">
    <div v-if="!(loading)" class="main-container">
      <div class="top-banner mb-4">
        <img src="../assets/logo.png" alt srcset />
        <h1 class="text-center">Warehouse Dashboard</h1>
      </div>
      <SearchBar class="mb-5" />
      <Dashboard />
    </div>
  </transition>
</template>

<script>
import Dashboard from "./../components/Dashboard.vue";
import SearchBar from "./../components/SearchBar.vue";
export default {
  name: "Home",
  data() {
    return {
      loading: true,
    };
  },
  components: {
    Dashboard,
    SearchBar,
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>


<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
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
  margin: 2% 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>