// expose our config directly to our application using module.exports
export class Auth {
    public static readonly facebookAuth_clientId = '323630954696-jc9i2hg79nbv15299gklloabq45qdihi.apps.googleusercontent.com';
    public static readonly facebookAuth_clientSecret =  'm-XJup4v1E28ekl4ZnuVpXbG';
    public static readonly facebookAuth_callbackUrl = 'http://localhost:8080/auth/facebook/callback';

    public static readonly googleAuth_clientId = 'your-secret-clientID-here';
    public static readonly googleAuth_clientSecret = 'your-secret-clientID-here';
    public static readonly googleAuth_callbackUrl = 'http://localhost:8080/auth/google/callback';
};