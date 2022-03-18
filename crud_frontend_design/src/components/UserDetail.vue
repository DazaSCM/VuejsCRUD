<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="image_url" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">User ID: {{ this.id }}</h5>
      <p class="card-text">{{ this.name }}</p>
      <router-link :to="{ name: 'UserIndex' }" class="btn btn-primary">Go Back</router-link>
    </div>
</div>
</template>

<script>
export default {
  data(){
      return{
        image_url: this.$route.params.image_url,
        id: this.$route.params.id,
        name: this.$route.params.name
      }
    }
}
</script>