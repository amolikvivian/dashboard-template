<template>
  <div class="details-container">
    <h1>
      Wearhouse Details : {{warehouseData.name}}
      <router-link to="/" class="btn btn-back">Back to Dashboard</router-link>
      <button class="btn btn-edit" @click="readToggle = !(readToggle)">Edit Access</button>
    </h1>
    <div class="container">
      <div class="row mt-2" v-for="(val, header) in warehouseData" :key="val">
        <div class="col-md-4 headers-col">{{header}}</div>
        <div class="col-md-4 values-col">{{val}}</div>
        <!-- <div class="col-md-4 values-col">
          <input
            type="text"
            name="inputs"
            :value="val"
            :readonly="readToggle"
            :style="readToggle ? 'color: #818181' : '#000000' "
          />
        </div>-->
        <div class="col-md-4 text-center edit-col">
          <editModal :value="String(val)" :header="header" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editModal from "@/components/Modal.vue";
export default {
  components: { editModal },
  data() {
    return {
      warehouseData: [],
      readToggle: true,
    };
  },
  mounted() {
    this.warehouseData = this.$store.getters.warehouseByID(
      this.$route.params.id
    );
  },
};
</script>

<style scoped>
.details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 5rem;
}
.row {
  width: 100%;
}
.container {
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: 70%;
  padding: 2rem;
}
.headers-col,
.values-col {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}
.headers-col {
  font-weight: bold;
}
.values-col {
  background-color: #2c3046;
  color: #f3f3f3;
  /* color: black; */
}
h1 {
  display: flex;
  flex-direction: column;
}
.btn-back {
  margin-top: 4%;
  color: #fff;
  background-color: #ee3434;
  border: 2px solid #ee3434;
  font-size: 1.1rem;
}
.btn-back:hover {
  background-color: #fff;
  color: #ee3434;
  border: 2px solid #ee3434;
  font-weight: bold;
}
input {
  border: none;
  border-bottom: 2px solid #2c3046;
  padding: 0.3rem 0.2rem;
}
input:focus {
  border: none;
  border-bottom: 2px solid #ee3434;
  outline: none;
}
</style>