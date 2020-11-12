/* eslint-disable */

const oauthconfig = {
    "domain": "secondarytest.auth.us-east-2.amazoncognito.com",
    "scope": [
        "phone",
        "email",
        "openid",
        "profile",
        "aws.cognito.signin.user.admin"
    ],
    "redirectSignIn": "http://localhost:3000/",
    "redirectSignOut": "https://master.d1i2ha05cazkpa.amplifyapp.com/",
    "responseType": "token"

}
export {oauthconfig};
