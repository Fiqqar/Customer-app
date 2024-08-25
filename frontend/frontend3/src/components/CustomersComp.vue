<template>
<div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"/>
    <h1 class="page-header">Manage Customers</h1>
    <input placeholder="Enter last name" class="form-control" v-model="filterinput">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in filterby(customers, filterinput)">
                <td>{{ customer.first_name }}</td>
                <td>{{ customer.last_name }}</td>
                <td>{{ customer.phone }}</td>
                <td><router-link class="btn btn-default" v-bind:to="'/customer/' + customer.id">View</router-link></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import Alert from './AlertComp';
export default {
    name: "customersComp",
    data () {
        return {
            customers: [],
            alert: "",
            filterinput: ""
        }
    },
    methods : {
        getcustomer () {
            this.$http.get("http://localhost:8080/api/customer/list").then (function(response){
                this.customers = response.body.result;
            });
        },
        filterby (list, value) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
            return list.filter(function(customer){
                return customer.last_name.indexOf(value) > -1;
            });
        }
    },
    created : function () {
        this.getcustomer()
    },
    updated : function () {
        this.getcustomer()
    },
    components : {
        Alert
    }
}
</script>