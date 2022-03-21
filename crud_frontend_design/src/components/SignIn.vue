<template>
  <div class="container w-200 mt-5">
    <div class="card">
      <div class="card-header">
        <h3>Sign In</h3>
      </div>
      <div class="card-body">
        <form class="mb-2" v-on:submit.prevent="signIn">
          <div class="form-group mb-3">
            <label class="mb-2">Enter Email:</label>
            <input type="text" class="form-control" v-model="user.email"/>
          </div>
          <div class="form-group mb-3">
            <label class="mb-2">Enter Password:</label>
            <input type="password" class="form-control" v-model="user.password"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Log In"/>
          </div>
        </form>
        <p>Do not have an account? <router-link :to="{ name: 'SignUp' }">Sign Up</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  Components: {
    name: 'SignIn'
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    signIn () {
      let uri = 'http://localhost:3000/sign_in';
      this.axios.post(uri, this.user).then((response) => {
        localStorage.setItem("token", response.data.token);
        this.$router.push({name: 'UserIndex'});
      });
    }
  }
}
</script>