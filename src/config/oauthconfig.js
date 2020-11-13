/* eslint-disable */

const oauthconfig = {
    "domain": "secondarytest.auth.us-east-1.amazoncognito.com",
    "scope": [
        "phone",
        "email",
        "openid",
        "profile",
        "aws.cognito.signin.user.admin"
    ],
    "redirectSignIn": "http://localhost:3000/",
    "redirectSignOut": "https://master.d2nm4gtt3pzpjh.amplifyapp.com/",
    "responseType": "token"
}
export {oauthconfig};
