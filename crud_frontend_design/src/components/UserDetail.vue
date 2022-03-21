<template>
  <div class="card m-auto text-center" style="width: 23rem;">
    <img v-bind:src="image_url" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">User ID: {{ id }}</h5>
      <p class="card-text">{{ email }}</p>
      <router-link :to="{ name: 'UserIndex' }" class="btn btn-primary">Go Back</router-link>
    </div>
</div>
</template>

<script>
export default {
  data() {
    console.log(this.$route.query.user);
    var user= JSON.parse(this.$route.query.user);
    return {
      id: user.id,
      email: user.email,
      image_url: user.image_url
    }
  }
}
</script>