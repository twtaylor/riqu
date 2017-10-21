// expose our config directly to our application using module.exports
export const Auth = {
    FacebookAuth:String = {
        'clientID'      : '323630954696-jc9i2hg79nbv15299gklloabq45qdihi.apps.googleusercontent.com', // your App ID
        'clientSecret'  : 'm-XJup4v1E28ekl4ZnuVpXbG', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    GoogleAuth:String = {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }
};