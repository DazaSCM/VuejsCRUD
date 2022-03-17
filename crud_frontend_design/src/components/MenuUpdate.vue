<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Menu Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
          <div class="form-group mb-3">
            <label class="mb-2">Menu Item Name:</label>
            <input type="text" class="form-control" v-model="item.menu_name"/>
          </div>
          <div class="form-group mb-3">
            <label class="mb-2">Restaurant Name:</label>
            <input type="text" class="form-control" v-model="item.restaurant_name"/>
          </div>
          <div class="form-group mb-3">
            <label class="mb-2">Item Description:</label>
            <input type="text" class="form-control" v-model="item.menu_description"/>
          </div>
          <div class="form-group">
            <div class="d-flex justify-content-around">
              <input type="submit" class="btn btn-primary" value="Update Item"/>
              <button class="btn btn-secondary" v-on:click="goToHome()">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      item:{},
      api_header : {headers: {
        'Authorization': localStorage.getItem('token')
      }}
    }
  },

  created: function(){
    this.getItem();
  },

  methods: {
    getItem()
    {
      let uri = 'http://localhost:3000/secret_menu_items/' + this.$route.params.id;
        this.axios.get(uri, this.api_header).then((response) => {
          this.item = response.data;
          return response
        });
    },

    updateItem()
    {
      let uri = 'http://localhost:3000/secret_menu_items/' + this.$route.params.id;
        this.axios.put(uri, this.item, this.api_header).then((response) => {
          this.$router.push({name: 'MenuIndex'});
          return response
        });
    },
    goToHome(){
      this.$router.push({name: 'MenuIndex'}); 
    }
  }
}
</script>