<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        <img :src="logo"><span class="txt ml-2">SCM</span>
      </div>
      <div>
        <v-btn to="/tutorials" text>
          Tutorials
        </v-btn>
        <v-btn to="/add" text>
          Add
        </v-btn>
      </div>
      
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      logo: require('./assets/img_vuejs_logo.png')
    }
  }
};
</script>

<style>
  img {
    width: 50px;
    height: 50px;
  }
  .v-toolbar__content{
    justify-content: space-between!important;
  }
  .txt {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font: icon;
    font-size: 22px;
    font-style: oblique;
    font-weight: 900;
  }
</style>