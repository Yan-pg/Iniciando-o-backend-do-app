import nodemailer, { Transporter } from 'nodemailer';
import { inject, injectable } from 'tsyringe';

import IMailTamplateProvider from '../../MailTamplateProvider/models/IMailTemplateProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailProvider from '../models/IMailProvider';

@injectable()
export default class EthereaMailProvider implements IMailProvider {
  private cliente: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTamplateProvider,
  ) {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.cliente = transporter;
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const message = await this.cliente.sendMail({
      from: {
        name: from?.name || 'Equipe GoBarber',
        address: from?.name || 'equipe@gobarber.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });

    console.log('Message sent: %s', message.messageId);
    console.log('preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
