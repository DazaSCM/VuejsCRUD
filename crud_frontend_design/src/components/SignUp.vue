<template>
  <div class="container w-400">
        <div class="card">
            <div class="card-header">
                <h3>Sign Up Account</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addUser">
                    <div class="form-group mb-3">
                        <label class="mb-2">Enter Email:</label>
                        <input type="text" class="form-control" v-model="user.email"/>
                    </div>
                    <div class="form-group mb-3">
                        <label class="mb-2">Enter Password:</label>
                        <input type="password" class="form-control" v-model="user.password"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add User"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  Components: {
      name: 'SignUp'
  },
  data() {
      return {
          user: {}
      }
  },
  methods: {
      addUser() {
           let uri = 'http://localhost:3000/sign_up';
            this.axios.post(uri, this.user).then((response) => {
                this.$router.push({name: 'UserIndex'});
                console.log(response.data)
            });
        }
    }
}
</script>