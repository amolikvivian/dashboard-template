import { createStore } from "vuex";
import json from "./../data/warehouses.json";

export default createStore({
  state: {
    data: json,
    warehouses: null,
  },
  getters: {
    //Getting Warehouse by ID
    warehouseByID: (state) => (id) => {
      return state.data.find((item) => item.id == id);
    },
    //Getting Cities from data
    cities: (state) => {
      const temp = state.data.map((item) => item.city);
      return [...new Set(temp)];
    },
    //Getting Clusters from data
    clusters: (state) => {
      const temp = state.data.map((item) => item.cluster.substring(8));
      return [...new Set(temp)];
    },
  },

  mutations: {
    //Searching by Warehouse Names
    searchQuery(state, payload) {
      let filtered = [];
      if (payload === "") alert("Enter Valid Warehouse Name");
      else {
        filtered = state.data.filter((item) => {
          return item.name.toLowerCase().includes(payload.toLowerCase());
        });
        state.warehouses = filtered;
      }
    },
    //Generalized Filter Mutation
    filterData(state, payload) {
      let filtered = [];
      if (
        payload.query === "Filter by Cluster" ||
        payload.query === "Filter by City"
      )
        alert("Select Valid Filter");
      else {
        if (state.warehouses === null) {
          filtered = state.data.filter((item) => {
            if (payload.name === "cluster") {
              return (
                item[payload.name].toLowerCase().substring(8) ===
                payload.query.toLowerCase()
              );
            } else {
              return (
                item[payload.name].toLowerCase() === payload.query.toLowerCase()
              );
            }
          });
          state.warehouses = filtered;
        } else {
          filtered = state.warehouses.filter((item) => {
            if (payload.name === "cluster") {
              return (
                item[payload.name].toLowerCase().substring(8) ===
                payload.query.toLowerCase()
              );
            } else {
              return (
                item[payload.name].toLowerCase() === payload.query.toLowerCase()
              );
            }
          });
          state.warehouses = filtered;
        }
      }
    },
    //Filtering by Space Limit
    filterSpace(state, payload) {
      let filtered = [];
      if (payload == 0) {
        state.warehouses = state.data;
      } else if (payload > 0 && state.warehouses === null) {
        filtered = state.data.filter((item) => {
          return item.space_available <= payload;
        });
        state.warehouses = filtered;
      } else if (payload > 0 && state.warehouses !== null) {
        filtered = state.warehouses.filter((item) => {
          return item.space_available <= payload;
        });
        state.warehouses = filtered;
      } else {
        alert("Cannot Filter for negative values");
      }
    },
    //Editing data
    editData(state, payload) {
      let payloadData = payload.payload;
      parseInt(payloadData.id);
      state.data[payloadData.id - 1][payloadData.header] = payloadData.val;
    },
    //Generalized sort mutation
    sortData(state, payload) {
      if (state.warehouses === null)
        state.data.sort((a, b) => (a[payload] > b[payload] ? 1 : -1));
      else state.warehouses.sort((a, b) => (a[payload] > b[payload] ? 1 : -1));
    },
    //Refreshing States
    refreshDashboard(state) {
      state.warehouses = null;
    },
  },

  actions: {
    searchQuery({ commit }, payload) {
      commit("searchQuery", payload);
    },
    filterData({ commit }, payload) {
      commit("filterData", payload);
    },
    filterSpace({ commit }, payload) {
      commit("filterSpace", payload);
    },
    editData({ commit }, payload) {
      commit("editData", payload);
    },
    sortData({ commit }, payload) {
      commit("sortData", payload);
    },
    refreshDashboard({ commit }) {
      commit("refreshDashboard");
    },
  },
});
