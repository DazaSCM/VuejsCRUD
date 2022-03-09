<template>
  <div id="items" class="container w-600">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Menu Name</th>
          <th scope="col">Restaurant Name</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody v-for="(item) in items" :key="item.id">
        <tr>
          <td>{{item.menu_name}}</td>
          <td>{{item.restaurant_name}}</td>
          <td>{{item.menu_description}}</td>
        </tr>
        <!-- <div v-for="(item) in items" :key="item.id">
          <p>{{item.menu_name}} - {{item.restaurant_name}} - {{item.menu_description}}</p>
        </div> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
    items: [],
    menu_name: [],
    restaurant_name: [],
    menu_description: [],
    errors: []
    }
  },
  created() {
    axios.get('http://localhost:3000/secret_menu_items') 
    .then(response => {
    this.items = response.data
    })
  .catch(e => {
    this.error.push(e)
  })
 },
}
</script>