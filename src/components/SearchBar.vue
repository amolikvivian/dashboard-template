<template>
  <div class="search-filter">
    <!-- Name Search Query Start -->
    <div class="search-bar">
      <input
        type="text"
        v-model="nameQuery"
        placeholder="Search by Warehouse Name"
        autocomplete="off"
      />
      <button class="btn" @click="$store.dispatch('searchQuery', nameQuery)">
        <i class="fa fa-search"></i>
      </button>
    </div>
    <!-- Name Search Query End  -->

    <!-- City filter start  -->
    <div class="city-filter">
      <select v-model="cityQuery">
        <option disabled selected>Filter by City</option>
        <option :value="city" v-for="city in cities" :key="city">{{city}}</option>
      </select>
      <button class="btn" @click="$store.dispatch('filterData', {query: cityQuery, name:'city'})">
        <i class="fa fa-filter"></i>
      </button>
    </div>
    <!-- City filter end  -->

    <!-- Cluster filter start -->
    <div class="cluster-filter">
      <select v-model="clusterQuery">
        <option disabled selected>Filter by Cluster</option>
        <option :value="cluster" v-for="cluster in clusters" :key="cluster">{{cluster}}</option>
      </select>
      <button
        class="btn"
        @click="$store.dispatch('filterData', {query: clusterQuery, name:'cluster'})"
      >
        <i class="fa fa-filter"></i>
      </button>
    </div>
    <!-- Cluster filter end -->

    <div class="space-filter">
      <input
        type="number"
        name="space_limit"
        id="space_limit"
        placeholder="Enter Space Limit"
        v-model="space"
      />
      <button class="btn" @click="$store.dispatch('filterSpace', space)">
        <i class="fa fa-filter"></i>
      </button>
    </div>

    <!-- Refresh button start -->
    <button class="btn refresh-btn" @click="$store.dispatch('refreshDashboard'), clearSearch()">
      <i class="fa fa-refresh"></i>
    </button>
    <!-- Refresh button end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      space: "",
      nameQuery: "",
      clusterQuery: "Filter by Cluster",
      cityQuery: "Filter by City",
      cities: this.$store.getters.cities,
      clusters: this.$store.getters.clusters,
    };
  },
  methods: {
    clearSearch() {
      this.nameQuery = "";
      this.space = "Enter Space Limit";
      this.cityQuery = "Filter by City";
      this.clusterQuery = "Filter by Cluster";
    },
  },
};
</script>

<style scoped>
::placeholder {
  color: black;
}

.buttons button {
  padding: 10px;
  margin: 0 2rem;
  width: 5rem;
}
.search-filter,
.space-filter,
.city-filter,
.cluster-filter,
.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
input {
  margin: 0 5px;
  padding-bottom: 10px;
  width: 15rem;
}
input,
input:focus {
  border: none;
  outline: none;
  border-bottom: 2px solid #000;
}
.space-filter input {
  width: 10rem;
}
input:focus,
select:focus {
  border-bottom: 2px solid #ee3434;
}
select {
  outline: none;
  border: none;
  border-bottom: 2px solid #000;
  width: 12rem;
  padding-bottom: 10px;
}

.btn {
  margin-left: 1.5rem;
  padding: 0.4rem 1rem;
  color: #f7f7f7;
  background-color: #ee3434;
  border: 2px solid #ee3434;
  border-radius: 3px;
}
.btn:hover {
  background-color: #ffffff;
  border: 2px solid #ee3434;
  color: #ee3434;
}
.refresh-btn {
  margin-left: 0;
  background-color: #ffffff;
  border: 2px solid #ee3434;
  color: #ee3434;
}
.refresh-btn:hover {
  color: #ffffff;
  border: 2px solid #ee3434;
  background-color: #ee3434;
}
</style>