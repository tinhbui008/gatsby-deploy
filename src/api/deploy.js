//src/api/my-first-function.js

export default async function handler(req, res) {
  const body = {
    username: "FLS Group",
    avatar_url: "https://fls-group.com/images/fls-group.png",
    content: null,
    embeds: [
      {
        title: req?.query?.success
          ? "Successful deploy of FLS"
          : "Deploy did not complete for FLS",
        color: req?.query?.success ? 7143256 : 16731726,
        author: {
          name: "FLS Group",
          url: "https://fls-group.com/",
          // "icon_url": "https://res.cloudinary.com/saigon-digital/image/upload/v1698743977/logo-white_t8jzw2.png"
        },
      },
    ],
    attachments: [],
  }
  await fetch(
    `https://discord.com/api/webhooks/1141618898760892446/QZfWsGyi5V_es-jCElJIy1jns5ZTdeMRBNB6N-jMy8Mt_sTrcmjXVARdc0GUwhlmUolU`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )

  res.status(200).json({ message: "Hello from Next.js!" })
}
