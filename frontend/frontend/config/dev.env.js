var merge = require("webpack-merge");
var prodenv = require("./prod.env");
module.exports = merge(prodenv, {
    NODE_ENV: "development",
    
});