<template>
  <div class="container w-50 ">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">ID : {{ id }}</h2>
        <p class="card-text">First Name : {{ first_name }}</p>
        <p class="card-text">Last Name : {{ last_name }}</p>
        <p class="card-text">Generd : {{ gender }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "userDetails",
  data() {
    return {
      id: "",
      first_name: "",
      last_name: "",
      gender: "",
    };
  },
  created() {
    this.getuserById();
  },
  methods: {
    getuserById() {
      this.id = this.$route.params.id;
      console.log(this.id);
      axios
        .get(` http://localhost:2000/users/${this.id}`)
        .then((response) => {
          
          this.id = response.data.id;
          this.first_name = response.data.first_name;
          this.last_name = response.data.last_name;
          this.gender = response.data.gender;
        })
        .catch((err) => console.log(err));
    },
    back() {
      this.$router.push("/users");
    },
  },
};
</script>

<style>

.card {
  margin-top: 20% !important;
  align-items: center;
 padding: 10px;
   background-color: transparent !important;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
}
</style>