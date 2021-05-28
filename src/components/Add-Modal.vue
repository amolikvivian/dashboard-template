<template>
  <div>
    <button class="btn btn-add" @click="isOpen = true">Add Data</button>
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div class="content">
          <h3 class="mb-4">Add New Data Field</h3>
          <input
            class="mb-5"
            type="text"
            placeholder="Enter key"
            name="edit"
            v-model="payload.header"
          />
          <input
            class="mb-5"
            type="text"
            placeholder="Enter value"
            name="edit"
            v-model="payload.val"
          />
          <div class="btn-container">
            <button
              class="btn btn-submit"
              @click="$store.dispatch('addData', { payload }), isOpen = false"
            >Add</button>
            <button class="btn btn-cancel" @click="isOpen = false">Close</button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      payload: {
        id: this.$route.params.id,
        header: "",
        val: "",
      },
    };
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  background-color: #1b1d2bd3;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-self: center;
}
.modal > div {
  position: relative;
  background-color: #fff;
  padding: 50px;
  left: 35vw;
  width: 30em;
  border: 3px solid #2c3046;
}

.content {
  display: flex;
  flex-direction: column;
}
input {
  border: none;
  border-bottom: 2px solid #2c3046;
  padding: 0.4rem;
  font-size: 1.3rem;
}
input:focus {
  outline: none;
}
.btn-container {
  display: flex;
  justify-content: space-around;
}
.btn {
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-self: center;
}
.btn-submit {
  background-color: #2c3046;

  width: 10rem;
  border: 2px solid #2c3046;
  color: white;
}
.btn-submit:hover {
  color: #2c3046;

  border: 2px solid #2c3046;
  background-color: white;
}
.btn-cancel {
  background-color: #ee3434;
  border: 2px solid #ee3434;
  color: white;

  width: 10rem;
}
.btn-cancel:hover {
  color: #ee3434;
  border: 2px solid #ee3434;
  background-color: white;
}
.fa-plus {
  padding-left: 5px;
}
.btn-add {
  margin-top: 10%;
  color: white;
  background-color: #2c3046;
  font-weight: 300;
}
</style>
