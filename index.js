const express = require('express')
const app = express();
// app.use(express.json({ extended: false }));
// app.use(express.urlencoded({ extended: false }));
require('dotenv').config();
const port = process.env.PORT;
const user = process.env.USER;
const pass = process.env.PASS;

const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({

    host: "smtp.elasticemail.com",
    port: 2525,
    auth: {
        user: user,
        pass: pass
    },
    tls: {
        rejectUnauthorized: true
    }
});

let message =
{
    from: 'vampbaxx@gmail.com',
    to: 'aderinwale.bx@gmail.com, aderinwale.basit@neulogicsolutions.com, oladipolekky@gmail.com, darefelix3858@gmail.com, aishatabdulfatah81@gmail.com, tobiosuolale22@gmail.com',
    subject: 'This is not a Drill, YOU ARE BEING HACKED!!!',
    attachments: {
        filename: "You've been got",
        path: "./err.png"
    },
    text: 'YOU ARE BEING HACKED BY ANONYMOUS FROM THE DARK WEB. YOUR SECRETS ARE SAFE WITH ME (NOT). YOUR BANK ACCOUNT AND BVN ARE BEING SIPHONED AS WE SPEAK - XOXO DARTH'
};

//  transporter.sendMail(message, (err, data)=>{
//     if (err){
//         console.log( err)
//     }
//     else{
//         console.log("Mail Sent Successfully")
//     }
//  }) 

try {
    transporter.sendMail(message, () => {
        console.log('Mail sent successfully')
    });

} catch (err) {
    console.log(err)
}



// Using app.post and send the details for the mail from the server

// app.post('/send-mail', (req, res) => {
//     // var receiver = req.body.to;
//     // var subject = req.body.subject;
//     // var message = req.body.message;
//     console.log(req.body)
//     const {receiver, subject, message} = req.body



//     var mailOptions = {
//         from: 'vampbaxx@gmail.com',
//         to: receiver,
//         subject: subject,
//         text: message,
//         attachments: {
//             filename:"Zoom",
//             path:"./err.png"
//         }
//     };

//     transporter.sendMail(mailOptions,  (error, info) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email was sent successfully: ' + info.response)
//         }
//     })
// })

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})