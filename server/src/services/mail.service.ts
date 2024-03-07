import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private readonly transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: configService.get('SMTP_HOST'),
      service: configService.get('SMTP_SERVICE'),
      port: configService.get('SMTP_PORT'),
      secure: false,
      auth: {
        user: configService.get('SMTP_USER'),
        pass: configService.get('SMTP_PASSWORD'),
      },
    });
  }

  async sendMail(to: string, subject: string, html?: string): Promise<void> {
    const mailOptions = {
      from: this.configService.get('SMTP_USER'),
      to,
      subject,
      html,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
