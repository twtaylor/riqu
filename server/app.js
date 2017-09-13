"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var google = require('googleapis');
var GoogleAuth = require('google-auth-library');

var authFactory = new GoogleAuth();
var dns = google.dns('v1');
