<template>
  <div id="app" class="container">
    <div v-if="!$route.meta.hideNavbar" class="navbar navbar-expand-sm bg-light d-flex justify-content-between">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link :to="{ name: 'UserIndex' }" class="nav-link">All Users</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'MenuCreate' }" class="nav-link">Add Item</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'MenuIndex' }" class="nav-link">All Items</router-link>
          </li>
        </ul>
      <router-link :to="{ name: 'SignIn' }" class="nav-tabs nav-item nav-link"><span @click="logout">Log out</span></router-link>
    </div>
    
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  methods: {
    logout (){
      localStorage.removeItem("token");
    }
  }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
</style>