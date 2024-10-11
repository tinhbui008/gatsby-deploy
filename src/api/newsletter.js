import Mailchimp from "@mailchimp/mailchimp_transactional"
import Mailjet from "node-mailjet"
import { newsletterTemplate } from "../utils/newsletter-template"

export default async function handler(req, res) {
  const publicKey = process.env.GATSBY_MAILJET_API
  const privateKey = process.env.GATSBY_MAILJET_API_SECRECT

  const mailjet = Mailjet.apiConnect(publicKey, privateKey)
  const mailchimpClient = Mailchimp("md-EFWferNXFE7LrH1T4PVgjw")
  try {
    // const response = await mailchimpClient.messages
    //   .send({
    //     message: {
    //       subject: "World Movers Newsletter",
    //       html: newsletterTemplate(req?.body?.name),
    //       from_email: "no-reply@fls-group.com",
    //       to: [{ email: req?.body?.email, type: "to" }],
    //     },
    //   })
    //   .then(response => {
    //     // console.log(response)
    //     // return res.status(200).json(response)
    //   })
    //   .catch(e => {
    //     console.log(e)
    //     return res.status(500).json({ message: "Server error" })
    //   })
    // return res.status(200).json({ message: "Email has been sent" })
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            // Email: "no-reply@fls-group.com",
            Email: "news@fls-group.com",
            Name: "FLS Group",
          },
          To: [
            {
              Email: req?.body?.email,
              Name: req?.body?.name,
            },
          ],
          TemplateID: 5773234,
          TemplateLanguage: true,
          "Variables": {
            "name": req?.body?.name || ""
          },
          Subject: "World Movers Newsletter",
          // HTMLPart: newsletterTemplate(req?.body?.name),
        },
      ],
    })
    
    request
      .then(result => {
        // console.log(123, result.body)
        return res.status(200).json(result.body)
      })
      .catch(err => {
        // console.log(err)
        return res.status(500).json({ message: "Server error" })
      })
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error sending email" }),
    }
  }
}
