<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light d-flex justify-content-around">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link :to="{ name: 'MenuCreate' }" class="nav-link">Add Item</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'MenuIndex' }" class="nav-link">All Items</router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
  </div>
</template>

<script>

export default {
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