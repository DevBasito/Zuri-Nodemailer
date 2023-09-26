const express = require('express')
const app = express();
// app.use(express.json({ extended: false }));
// app.use(express.urlencoded({ extended: false }));
require('dotenv').config();
const port = process.env.PORT;
const user = process.env.USER;
const pass = process.env.PASS;

const nodemailer = require('nodemailer');
let fullname = 'Aderinwale Basit';
let email = 'goal'
const imageurl = "https://bookccentric.onrender.com/assets/BookccentricLogo-f308e8cf.png";

const transporter = nodemailer.createTransport({

    host: "smtp.elasticemail.com",
    port: 2525,
    auth: {
        user: user,
        pass: pass
        // vampbaxx@gmail.com
        // F59211336B89B4BF8D7803BD36F9A86A0822
    },
    tls: {
        rejectUnauthorized: true
    }
});

let message =
{
    from: 'vampbaxx@gmail.com',
    to: 'aderinwale.basit@neulogicsolutions.com',
    subject: 'This is not a Drill, YOU ARE BEING HACKED!!!',
    attachments: [{
        filename: "bookccentric.png",
        path: "https://bookccentric.onrender.com/assets/BookccentricLogo-f308e8cf.png" ,
        cid: "bcclogo"
    }],
    text: "Drop your money. your money or your life",
    html: `<div>
    
 
    <div>
        <p>Dear ${fullname}, </p>
        <p>We have received your order and we will reach out to when it is ready for delivery</p>
        <p>Order Details</p>
        <table>
            <tr>
                <td>Order Reference:</td>
                <td>${fullname}</td>
            </tr>
            <tr>
                <td>Name:</td>
                <td>${fullname}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>Books:</td>
                <td>${fullname}</td>
            </tr>
            <tr>
                <td></td>
                <td>${fullname}</td>
            </tr>
            <tr>
                <td>Total Amount Paid</td>
                <td>${fullname}</td>
            </tr>
            <tr>
                <td>Phone Number</td>
                <td>${fullname}</td>
            </tr>
            <tr>
                <td>Delivery Address</td>
                <td>${fullname}</td>
            </tr>


        </table>

    </div>
    <div>
        Thanks for your patronage. We hope to see you again
    </div>

</div>`
};

 // Use either text or html for the body of the mail

try {
    transporter.sendMail(message, () => {
        console.log('Mail sent successfully')
    });

} catch (err) {
    console.log(err)
}

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})