<template>
  <div class="container">
    <h1>Deleted Users</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Email</td>
          <td>Restore User</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id}}</td>
          <td>{{ user.email }}</td>
          <td><button @click="restore(user.id)" class="btn btn-outline-success">Restore</button></td>
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
      let uri = 'http://localhost:3000/get_deleted_users';
      this.axios.get(uri, this.api_header).then((response) => {
        this.users = response.data;
      });
    },
    restore(id)
    {
      let uri = 'http://localhost:3000/restore/'+id;
      this.axios.get(uri, this.api_header).then(() => {
        this.users.splice(this.users.indexOf(id), 1);
      })
    }
  }
}
</script>