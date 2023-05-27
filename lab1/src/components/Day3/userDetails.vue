<template>
    <div class="container w-50">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">ID : {{ userDetails.id }}</h2>
          <p class="card-text">First Name : {{ userDetails.first_name }}</p>
          <p class="card-text">Last Name : {{ userDetails.last_name }}</p>
          <p class="card-text">Gender : {{ userDetails.gender }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserDetails } from "./composable";
  import { useRoute } from "vue-router";
  
  export default {
    name: "UserDetails",
    setup() {
      const route = useRoute();
      const id = route.params.id;
      const { userDetails } = useUserDetails(id);
  
      return {
        userDetails,
      };
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
  
  