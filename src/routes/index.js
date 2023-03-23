const express = require("express");
const ced_routes_access = require("./routes-ced");
const routes= express.Router();

const app_routes_system= (app) =>{
    /* http://localhost:5000/api/v1 */
    app.use("/api/v1", routes);
};
module.exports = app_routes_system;