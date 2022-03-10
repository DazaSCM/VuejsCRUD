<template>
    <div>
        <h1>Items</h1>

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
                items: []
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
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {
              let uri = 'http://localhost:3000/secret_menu_items/'+id;
              this.items.splice(id, 1);
              this.axios.delete(uri);
            }
        }
    }
</script>