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
          <div class="form-group mb-3">
            <label class="mb-2">Upload Profile Photo:</label>
            <input type="file" class="form-control" accept="image/png,image/jpeg" @change="setImage" />
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
    setImage(e) {
      e.preventDefault();
      this.user.image = e.target.files[0];
      console.log("e photo is --",e, "this user --",this.user.image);
    },
    addUser() {
      let uri = 'http://localhost:3000/sign_up';
      let formData = new FormData();
      formData.append("email", this.user.email);
      formData.append("password", this.user.password);
      formData.append("image", this.user.image);
      this.axios.post(uri, formData).then((response) => {
          this.$router.push({name: 'SignIn'});
          console.log(response.data)
      });
    }
  }
}
</script>