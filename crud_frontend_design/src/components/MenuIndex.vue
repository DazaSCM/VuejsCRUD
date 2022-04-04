<template>
  <div>
    <h1>Items</h1>
    <p class="text-center mb-2">Do you want to download data as CSV file? <button class="btn btn-success">Download</button></p>

    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Menu Item name</td>
          <td>Restaurant Name</td>
          <td>Menu description</td>
          <td colspan="2" class="text-center">Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id}}</td>
          <td>{{ item.menu_name }}</td>
          <td>{{ item.restaurant_name }}</td>
          <td>{{ item.menu_description }}</td>
          <td><router-link :to="{name: 'MenuUpdate', params: { id: item.id }}" class="btn btn-primary">Edit</router-link></td>
          <td><button class="btn btn-danger" v-on:click="deleteItem(item.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        items: [],
        api_header : {headers: {
          'Authorization': localStorage.getItem('token')
        }}
      }
    },

    created: function()
    {
      this.fetchItems();
    },

    methods: {
      fetchItems()
      {
        let uri = 'http://localhost:3000/secret_menu_items';
        this.axios.get(uri, this.api_header).then((response) => {
          this.items = response.data;
        });
      },
      deleteItem(id)
      {
        let uri = 'http://localhost:3000/secret_menu_items/'+id;
        this.axios.delete(uri, this.api_header).then(() => {
          this.fetchItems();
        })
      }
    }
  }
</script>