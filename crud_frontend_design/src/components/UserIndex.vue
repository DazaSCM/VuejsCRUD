<template>
  <div class="container">
    <h1>Users</h1>

    <p>Go to see deleted users? <router-link :to="{ name: 'RecycleBin'}" >Recycle Bin</router-link></p>

    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Email</td>
          <td colspan="3" class="text-center">Action</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id}}</td>
          <td>{{ user.email }}</td>
          <td><router-link :to="{ name: 'UserDetail', query: { user: JSON.stringify(user) }}" class="btn btn-outline-info" >Details</router-link></td>
          <td><button class="btn btn-outline-danger" @click="deleteUser(user.id)">Move to Bin</button></td>
          <td><button class="btn btn-outline-danger" @click="permanent_delete(user.id)">Permanent Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        users: [],
        api_header : {headers: {
          'Authorization': localStorage.getItem('token')
        }}
      }
    },

    created: function()
    {
      this.fetchUsers();
    },

    methods: {
      fetchUsers()
      {
        let uri = 'http://localhost:3000/get_all_users';
        this.axios.get(uri, this.api_header).then((response) => {
            this.users = response.data;
        });
      },
      deleteUser(id)
      {
        let uri = 'http://localhost:3000/soft_delete/'+id;
        this.axios.delete(uri, this.api_header).then(() => {
          this.fetchUsers();
        }).catch((err) => {
          console.log(err.response);    
        });
      },
      permanent_delete(id)
      {
        let uri = 'http://localhost:3000/permanent_delete/'+id;
        this.axios.delete(uri, this.api_header).then(() => {
          this.fetchUsers();
        });
      }
    }
  }
</script>