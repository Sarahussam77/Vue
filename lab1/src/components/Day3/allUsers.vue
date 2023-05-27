<template>
    <div class="container">
      <h1 class="my-2 text-center">List Of All Users</h1>
     
      <table class="table table-striped ">
        <thead style="background-color: black;color: white;">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.gender }}</td>
            <td>
              <router-link
                :to="`/users/${user.id}`"
                class="btn btn-sm btn-primary"
              >
                Details
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  
  export default {
    name: "AllUsers",
    setup() {
      const users = ref([]);
  
      const getAllUsers = () => {
        axios
          .get("http://localhost:2000/users")
          .then((res) => {
            console.log(res.data);
            users.value = res.data;
          })
          .catch((err) => console.log(err));
      };
  
      onMounted(() => {
        getAllUsers();
      });
  
      return {
        users,
      };
    },
  };
  </script>
  
  <style scoped></style>