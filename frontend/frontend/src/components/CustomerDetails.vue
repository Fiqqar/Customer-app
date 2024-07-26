<template>
    <div class="details container">
        <router-link to="/">Back</router-link>
        <h1 class="page-header">
            {{ customer.first_name }} {{ customer.last_name }}
            <span class="pull-right">
                <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">Edit</router-link>
                <button class="btn btn-danger" v-on:click="deletecustomer(customer.id)">Delete</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>{{ customer.phone }}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>{{ customer.email }}</li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">{{ customer.address }}</li>
            <li class="list-group-item">{{ customer.city }}</li>
            <li class="list-group-item">{{ customer.state }}</li>   
        </ul>
    </div>
</template>

<script>
export default {
    name: "customerDetails",
    data() {
        return {
            customer: ""
        }
    },
    methods: {
        deletecustomer(id) {
            this.$http.delete("http://localhost:8080/api/customer/delete/"+ id)
        },
        getcustomer (id) {
            this.$http.get("http://localhost:8080/api/customer/"+ id).then (function(response){
                this.customer = response.body;
            });
        }
    },
    created : function () {
        this.getcustomer(this.$route.params.id)
    }
}
</script>

