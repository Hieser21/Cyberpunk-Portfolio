require('dotenv').config()
const express = require('express')
const bodyParser= require('body-parser')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')

 
const OAuth2 = google.auth.OAuth2

const oauth2Client = new OAuth2(
    process.env.Client_ID,
    process.env.Client_Secret,
    "https://developers.google.com/oauthplayground"
    )

oauth2Client.setCredentials({
    refresh_token:process.env.Refresh_Token
})
const accessToken = oauth2Client.getAccessToken()

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static('build/static'))
app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/build/index.html");
  });
app.use(express.static('views'))
app.post('/email',(req,response)=>{
    import('./verify.mjs').then(verify => {verify(req)})

const port = process.env.PORT || 3000
const server = app.listen(port,listening)
function listening (){
  console.log(`server running on ${port}`)
}
