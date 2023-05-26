<template>
 <div class=" container py-2 w-50">
    <div v-if="success" class="alert alert-success" role="alert">
      User Added successfully!
    </div>

     
     
    <form  @submit.prevent="addUser">
      <div class="form-group">
        <label class="p-2" for="firstName">First Name:</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="firstName"
        />
      </div>
      <div class="form-group">
        <label class="p-2" for="lastName">Last Name:</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="lastName"
        />
      </div>
      <div class="form-group">
        <label class="p-2" for="gender">Gender:</label>
        <select class="form-control" id="gender" v-model="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit" class="btn btn-dark my-2">Add User</button>
    </form></div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddUser",
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "feMale",
      success: false,
    };
  },
  methods: {
    addUser() {
      const newUser = {
        first_name: this.firstName,
        last_name: this.lastName,
        gender: this.gender,
      };
      axios
        .post("http://localhost:2000/users", newUser)
        .then((response) => {
          this.$emit("add-user", response.data);
          this.firstName = ""; 
          this.lastName = "";
          this.gender = "Female";
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
 padding: 10px;
   background-color: transparent !important;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
}
</style>