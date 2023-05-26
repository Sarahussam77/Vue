import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { createWebHistory, createRouter } from "vue-router";
import allUsers from "./components/Day2/pages/allUsers.vue";
import userDetails from "./components/Day2/pages/userDetails.vue";
import userAdd from "./components/Day2/pages/userAdd.vue";
import userEdit from "./components/Day2/pages/userEdit.vue";
import errorApp from "./components/Day2/pages/errorPage.vue";
const routes = [
    {
      path: "/",
      component: allUsers,
      alias: "/users",
    },
    {
      path: "/users/add",
      component: userAdd,
    },
    {
      path: "/users/edit/:id",
      component: userEdit,
    },
    {
      path: "/users/:id",
      component: userDetails,
    },
    {
        path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
createApp(App).use(router).mount('#app')
