import Vue from 'vue';
// import App from './App';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import Customers from './components/CustomersComp';
import Customerdetails from './components/CustomerDetails';
import Add from './components/AddComp';
import Edit from './components/EditComp';
import About from './components/AboutComp';

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    mode : "history", 
    base : __dirname,
    routes: [
        {path : "/", component : Customers},
        {path : "/about", component : About},
        {path : "/edit/:id", component : Edit},
        {path : "/add", component : Add},
        {path : "/details/:id", component : Customerdetails},
    ]
});

new Vue({router, template: `
    <div id="app">
      <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">vCustomers</a>
        </div><div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">Add Customer</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
      <router-view></router-view>
    </div>
  `
}).$mount("#app");