
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export function useUserDetails(id) {
  const userDetails = ref({
    id: "",
    first_name: "",
    last_name: "",
    gender: "",
  });

  const users = ref([]);

  const route = useRoute();

  const getUserById = () => {
    axios
      .get(`http://localhost:2000/users/${id}`)
      .then((res) => {
        console.log(res.data);
        userDetails.value.id = res.data.id;
        userDetails.value.first_name = res.data.first_name;
        userDetails.value.last_name = res.data.last_name;
        userDetails.value.gender = res.data.gender;
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    axios
      .get("http://localhost:2000/users")
      .then((res) => {
        console.log(res.data);
        users.value = res.data;
      })
      .catch((err) => console.log(err));
  };

  const back = () => {
    route.push("/users");
  };

  onMounted(() => {
    getUserById();
    getAllUsers();
  });

  return {
    userDetails,
    users,
    back,
  };
}