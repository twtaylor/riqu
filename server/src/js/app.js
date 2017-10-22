"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// var google = require('googleapis');
// var GoogleAuth = require('google-auth-library');
// var authFactory = new GoogleAuth();
// var dns = google.dns('v1');
const app = express();
// Set variables for app
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
module.exports = app;
