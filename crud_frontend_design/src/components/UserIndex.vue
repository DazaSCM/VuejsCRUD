<template>
  <div>
    <h1>Users</h1>

    <table class="table table-hover">
        <thead>
        <tr>
            <td>ID</td>
            <td>Email</td>
        </tr>
        </thead>

        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id}}</td>
                <td>{{ user.email }}</td>
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
          this.axios.get(uri).then((response) => {
              this.users = response.data;
          });
        }
    }
  }
</script>