<template>
    <div class="add container">
        <Alert v-if="alert" v-bind:message="alert"/>
        <h1 class="page-header">Add Customer</h1>
        <form v-on:submit="addcustomer">
            <div class="well">
                <h4>Customer Info</h4>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" placeholder="Your First Name" v-model="customer.first_name">
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" placeholder="Your Last Name" v-model="customer.last_name">
                </div>
            </div>
            <div class="well">
                <h4>Customer Contact</h4>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Your Email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" placeholder="Your Phone Number" v-model="customer.phone">
                </div>
            </div>
            <div class="well">
                <h4>Customer Address</h4>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" placeholder="Your Address" v-model="customer.address">
                </div>
                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" placeholder="Your City" v-model="customer.city">
                </div>
                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" placeholder="Your State" v-model="customer.state">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import Alert from './AlertComp'
export default {
    name: "AddComp",
    data () {
        return {
            alert : "",
            customer : {}
        }
    },
    methods : {
        addcustomer (e) {
            if (!this.customer.first_name || !this.customer.last_name || !this.customer.email) {
                this.alert = "Please fill all required fields";
            }
            else {
                let newcustomer = {
                    first_name : this.customer.first_name, 
                    last_name : this.customer.last_name,
                    email : this.customer.email,
                    phone : this.customer.phone,
                    city : this.customer.city,
                    address : this.customer.address,
                    state : this.customer.state
                }
                this.$http.post("http://localhost:8080/api/customer/add", newcustomer).then (function(response){
                    this.$router.push({path: "/", query : {alert : "customer added successfully"}})
                });
                e.preventDefault();
                
            };
            e.preventDefault();        
        }
    },
    components : {
        Alert
    }
}
</script>