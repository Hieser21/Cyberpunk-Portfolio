
import implicitRenderHtml from './build/index.html';

// This is the demo secret key. In prod, we recommend you store
// your secret key(s) safely.
const SECRET_KEY = process.env.SECRET_KEY;

async function handlePost(request) {
    const body = await request.formData();
    // Turnstile injects a token in "cf-turnstile-response".
    const token = body.get('cf-turnstile-response');
    const ip = request.headers.get('CF-Connecting-IP');

    // Validate the token by calling the "/siteverify" API.
    let formData = new FormData();
    formData.append('secret', SECRET_KEY);
    formData.append('response', token);
    formData.append('remoteip', ip);

    const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        body: formData,
        method: 'POST',
    });

    const outcome = await result.json();
    if (!outcome.success) {
        return new Response('The provided Turnstile token was not valid! \n' + JSON.stringify(outcome));
    }
    const output=`
  <p>You have a new contact request</p>
  <img class="email" src="cid:email" alt="email-image">
  <h3>Contact details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Subject: ${req.body.subject}</li>
  <li>Email: ${req.body.email}</li>
  <li>Message: ${req.body.message}</li>
  </ul>`
const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth:{
  type:"OAuth2",
  user:process.env.GMAIL_USER,
  clientId:process.env.Client_ID,
  clientSecret:process.env.Client_Secret,
  refreshToken:process.env.Refresh_Token,
  accessToken:accessToken
  }})
const mailOpts = {
  from:process.env.GMAIL_USER,
  to:process.env.RECIPIENT,
  subject:'Portfolio Website',
  html:output
}
smtpTrans.sendMail(mailOpts,(error,res)=>{
   if(error){
   console.log(error);
   }
   else{
    console.log("Message sent: " + res.message);
    response.status(200).send('You can go back from this window now!')
    }
  //smtpTrans.close();
   })
})
}

export default {
    async fetch(request) {
        if (request.method === 'POST') {
            return await handlePost(request);
        }

        const url = new URL(request.url);
        let body = implicitRenderHtml;
        
        
        return new Response(body, {
            headers: {
                'Content-Type': 'text/html',
            },
        });
    },
};
