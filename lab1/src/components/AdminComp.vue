<template>
  <div >
    <h2>Admin</h2>
     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in usersArray" :key="index">
        
       <tr v-if="item.role === 'admin'">
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.role }}</td>
          <td><button @click="deleteItem(usersArray,index)" type="button">Delete</button></td>
         </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    usersArray:[]
  },
  methods: {

  deleteItem(usersArray,index) {
  usersArray.splice(index, 1);
  },}
}
</script>
<style>
table{
margin:auto;
border:1px solid}
tr,td{
border:1px solid;
padding:0.5em;}
</style>