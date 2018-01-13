"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// expose our config directly to our application using module.exports
class Auth {
}
Auth.facebookAuth_clientId = '323630954696-jc9i2hg79nbv15299gklloabq45qdihi.apps.googleusercontent.com';
Auth.facebookAuth_clientSecret = 'm-XJup4v1E28ekl4ZnuVpXbG';
Auth.facebookAuth_callbackUrl = 'http://localhost:8080/auth/facebook/callback';
Auth.googleAuth_clientId = 'your-secret-clientID-here';
Auth.googleAuth_clientSecret = 'your-secret-clientID-here';
Auth.googleAuth_callbackUrl = 'http://localhost:8080/auth/google/callback';
exports.Auth = Auth;
;
