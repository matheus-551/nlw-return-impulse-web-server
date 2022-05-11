import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "150e0401885f01",
      pass: "92a7d998b85eef"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@Feedget.com>',
            to: 'Matheus Falcão <mfalcao473@gmail.com>',
            subject,
            html: body,
        });
    }
}
