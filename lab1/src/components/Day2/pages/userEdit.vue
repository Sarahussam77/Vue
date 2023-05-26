<template>
  <div class="container py-2 w-50">
    <div v-if="success" class="alert alert-success" role="alert">
      User updated successfully!
    </div>
    <form @submit.prevent="updateUser">
      <div class="form-group">
        <label class="p-2" for="firstName">First Name:</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="user.first_name"
        />
      </div>
      <div class="form-group">
        <label class="p-2" for="lastName">Last Name:</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="user.last_name"
        />
      </div>
      <div class="form-group">
        <label class="p-2" for="gender">Gender:</label>
        <select class="form-control" id="gender" v-model="user.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit" class="btn btn-dark my-2">Update User</button>
    </form>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "EditUser",

  data() {
    return {
      user: {
        id: 1,
        first_name: "",
        last_name: "",
        gender: "",
      },
      success: false,
    };
  },
  created() {
    this.getUserById();
  },
  methods: {
    getUserById() {
      const userId = this.$route.params.id;
      axios
        .get(`http://localhost:2000/users/${userId}`)
        .then((res) => {
          console.log(res.data);
          this.user = res.data;
        })
        .catch((err) => console.log(err));
    },
    updateUser() {
      const userId = this.$route.params.id;
      const updatedUser = {
        id: this.user.id,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        gender: this.user.gender,
      };
      axios
        .put(`http://localhost:2000/users/${userId}`, updatedUser)
        .then((response) => {
          console.log(response);
          this.user = updatedUser;
          this.success = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>

form {
  margin-top: 20% !important;
  align-items: center;
 padding: 15px;
   background-color: transparent !important;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
}
</style>