<template>
<div class="container">
    <h1 class="my-3  text-center">All Users</h1>
    <table class="table table-striped ">
      <thead style="background-color: black;color: white;" >
        <tr>
          <th class="py-3" scope="col ">#</th>
          <th class="py-3" scope="col">First</th>
          <th class="py-3" scope="col">Last</th>
          <th class="py-3" scope="col">gender</th>
          <th class="py-3" scope="col">Actions</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.gender }}</td>

          <td>
              <router-link :to="`/users/${user.id}`" class="btn btn-sm btn-primary "
              >Details</router-link
              >
              <router-link :to="`/users/edit/${user.id}`" class="btn btn-sm btn-success mx-4">
               Edit 
             </router-link>
              <button class="btn btn-sm btn-danger " @click="deleteUser(user.id)">
                Delete
              </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: 'allUsers',
    data(){
      return{
      users: []
      }
    },
    created(){
      this.getAllUsers();
    },
    methods:{
      getAllUsers(){
        axios.get("http://localhost:2000/users")
        .then((response) => {
          console.log(response.data)
          this.users = response.data;
        })
      },
      deleteUser(id) {
      axios.delete(`http://localhost:2000/users/${id}`)
        .then((response) => {
          console.log(response.data);
          this.getAllUsers();
        })
        .catch((err) => console.log(err));
    },
    }
  }
  </script>
  
 
  