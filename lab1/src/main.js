// import { createApp } from 'vue'
// import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js"
// import { createWebHistory, createRouter } from "vue-router";
// import allUsers from "./components/Day2/pages/allUsers.vue";
// import userDetails from "./components/Day2/pages/userDetails.vue";
// import userAdd from "./components/Day2/pages/userAdd.vue";
// import userEdit from "./components/Day2/pages/userEdit.vue";
// import errorApp from "./components/Day2/pages/errorPage.vue";
// const routes = [
//     {
//       path: "/",
//       component: allUsers,
//       alias: "/users",
//     },
//     {
//       path: "/users/add",
//       component: userAdd,
//     },
//     {
//       path: "/users/edit/:id",
//       component: userEdit,
//     },
//     {
//       path: "/users/:id",
//       component: userDetails,
//     },
//     {
//         path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
//     }
//   ];
  
//   const router = createRouter({
//     history: createWebHistory(),
//     routes,
//   });
// createApp(App).use(router).mount('#app')
//lab3

import { createApp, reactive } from "vue";
import App from "./App.vue";
import axios from "axios";

import { createWebHistory, createRouter } from "vue-router";

import allUser from "./components/Day3/allUsers.vue";
import userDetails from "./components/Day3/userDetails.vue";
import errorApp from "./components/Day3/errorPage.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const routes = [
  {
    path: "/",
    component: allUser,
    alias: "/users",
  },

  {
    path: "/users/:id",
    component: userDetails,
  },
  {
    path: "/:NotFound(.*)*",
    component: errorApp,
    meta: { hideNavbar: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);

app.directive("fetch", {
  mounted(el, binding) {
    const fetchData = async () => {
      try {
        const response = await axios.get(binding.value);
        const data = response.data;
        binding.instance[binding.arg] = reactive(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (binding.arg === "get") {
      fetchData();
    } else if (binding.arg === "getById") {
      const id = binding.value;
      const url = `${binding.arg}/${id}`;
      fetchData(url);
    }
  },
});

createApp(App).use(router).mount("#app");
