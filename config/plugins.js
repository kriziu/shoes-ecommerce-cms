module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: env("EMAIL_USER"),
          pass: env("EMAIL_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: "noreply@ecommerce.com",
        defaultReplyTo: "noreply@ecommerce.com",
      },
    },
  },
});
