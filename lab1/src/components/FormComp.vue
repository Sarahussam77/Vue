<template>
<button @click="form=true ,selectedComponent=''">Form</button>
<button @click="selectedComponent = 'UserComp', form=false">Users</button>
<button @click="selectedComponent = 'AdminComp' , form=false">Admins</button>
  <form @submit.prevent="submitForm" v-if="form">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name">
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email">
    </div>
    <div>
      <input type="checkbox" id="Admin" v-model="Admin">
      <label for="Admin">Admin</label>
    </div>
    <input type="submit" value="submit"/>
  </form>

  <component :is="selectedComponent" :usersArray="FormArray" ></component>
</template>

<script>
import AdminComp from './AdminComp.vue'
import UserComp from './UserComp.vue'

export default {
  components: {
    AdminComp,
    UserComp
  },
  data() {
    return {
      name: '',
      email: '',
      FormArray:[],
      Admin: false,
      selectedComponent: '',
      form:true,
    }
  },
  methods: {
    submitForm() {
      
      if (this.Admin) {
      this.FormArray.push({
        name: this.name,
        email: this.email,
        role:"admin"
      })
        
      } else {
      this.FormArray.push({
        name: this.name,
        email: this.email,
        role:"user"
      })
      
      }
  
        this.name=""
        this.email=""
    
  
    }
  }
}
</script>
<style>
input[type=text],[type=email], select {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 50%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button {
padding: 0.5em;
margin:5px}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>