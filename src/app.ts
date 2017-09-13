import { Settings } from "./settings/server.config";
import * as os from "os";
import * as express from "express";

var google = require('googleapis');
var GoogleAuth = require('google-auth-library');

var authFactory = new GoogleAuth();
var dns = google.dns('v1');

var app = express();