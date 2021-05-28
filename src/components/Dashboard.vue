<template>
  <div class="dashboard">
    <table class="table">
      <tr>
        <th v-for="tableHeader in tableHeaders" :key="tableHeader" class="headers">
          <button
            class="btn text-white"
            @click="$store.dispatch(tableHeader.action, tableHeader.sortBy)"
          >
            {{tableHeader.title}}
            <i class="fa" :class="tableHeader.icon"></i>
          </button>
        </th>
      </tr>
      <tr
        v-for="(warehouse, index) in ($store.state.warehouses == null ? $store.state.data : $store.state.warehouses)"
        :key="warehouse.id"
        @click="pushView(warehouse.id)"
      >
        <td>{{index + 1}}</td>
        <td>{{warehouse.name}}</td>
        <td>{{warehouse.code}}</td>
        <td>{{warehouse.city}}</td>
        <td>{{warehouse.cluster.substring(8)}}</td>
        <td>{{warehouse.type}}</td>
        <td>{{warehouse.space_available}}</td>
        <td
          style="font-weight: bold;"
          :style="String(warehouse.is_registered) === 'true' ? 'color: #13b113' : 'color: #ee3434'"
        >
          <i
            class="fa"
            :class="String(warehouse.is_registered) === 'true' ? 'fa-check' : 'fa-times'"
          ></i>
        </td>
        <td
          style="font-weight: bold;"
          :style="String(warehouse.is_live) === 'true' ? 'color: #13b113' : 'color: #ee3434'"
        >{{ String(warehouse.is_live) === 'true' ? "Live" : "Inactive"}}</td>
      </tr>
    </table>
    <!-- No matches  -->
    <h3 v-if="$store.state.warehouses != null && $store.state.warehouses.length === 0">
      No matches found,
      <span>refresh.</span>
    </h3>
    <!-- No matches -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHeaders: [
        { title: "#", action: "", sortBy: "", icon: "" },
        { title: "Name", action: "", sortBy: "", icon: "" },
        { title: "Code", action: "", sortBy: "", icon: "" },
        { title: "City", action: "sortData", sortBy: "city", icon: "fa-sort" },
        {
          title: "Cluster",
          action: "sortData",
          sortBy: "cluster",
          icon: "fa-sort",
        },
        { title: "Type", action: "sortData", sortBy: "type", icon: "fa-sort" },
        {
          title: "Space",
          action: "sortData",
          sortBy: "space_available",
          icon: "fa-sort",
        },
        { title: "Registered", action: "", sortBy: "", icon: "" },
        {
          title: "Status",
          action: "sortData",
          sortBy: "is_live",
          icon: "fa-sort",
        },
      ],
    };
  },
  methods: {
    pushView(id) {
      this.$router.push(`/warehouse-details/${id}/`);
    },
  },
};
</script>

<style scoped>
.dashboard {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.table {
  width: 90%;
}
h3 {
  margin-top: 5%;
}
span {
  color: #ee3434;
  cursor: pointer;
}
td,
th {
  padding: 12px 15px;
  text-align: center;
  line-height: 35px;
}
/* tr:nth-child(odd) {
  background-color: #0a0a0a;
  color: rgb(247, 247, 247);
} */
td {
  cursor: pointer;
  line-height: 3rem;
  border-bottom: 1px solid #2c304693;
  font-size: 1.1rem;
}
th {
  border-bottom: 2px solid #141620;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: #141620;
  color: rgb(247, 247, 247);
}
.view-btn {
  cursor: pointer;
  text-align: center;
}
.btn {
  border: none;
  font-size: 1.1rem;
}
.btn:focus {
  outline: none;
  box-shadow: none;
}
.fa-sort {
  padding-left: 2px;
}
</style>