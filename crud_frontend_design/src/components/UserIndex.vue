<template>
  <div>
    <h1>Users</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id}}</td>
          <td>{{ user.email }}</td>
          <td><button @click="this.$router.push({ name: 'UserDetail', params: { id: user.id, email: user.email, image_url: user.image } })">Details</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        users: []
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
        let api_header = {headers: {
          'Authorization': localStorage.getItem('token')
            }};
        this.axios.get(uri, api_header).then((response) => {
            this.users = response.data;
        });
      }
    }
  }
</script>