const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/send", (req, res) => {
  let name = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;
  let college = req.body.college;
  let year = req.body.year;
  let division = req.body.division;
  let review = req.body.review;
  let txt =
    "\nname :" +
    name +
    "\nphone :" +
    phone +
    "\nemail :" +
    email +
    "\ncollege :" +
    college +
    "\nyear :" +
    year +
    "\ndivision :" +
    division +
    "\nreview :" +
    review;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vaibhavTester404@gmail.com",
      pass: "ymqz mpai snoa gumn",
    },
  });
  let mailOptions = {
    from: "vaibhavTester404@gmail.com",
    to: "vaibhavTester404@gmail.com",
    subject: "Enquiry from" + name,
    text: txt,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).json({ message: "server error" });
    } else {
      res.status(200).json({ message: "email sent" });
    }
  });
});
app.listen(9010, () => console.log("Ready at 9000"));
