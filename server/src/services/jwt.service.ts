import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  private secret: string;
  constructor(private readonly configService: ConfigService) {
    this.secret = this.configService.get<string>('JWT_SECRET');
  }

  generateToken(payload: any, expiresIn: string): string {
    return jwt.sign(payload, this.secret, { expiresIn });
  }

  verifyToken(token: string): any {
    return jwt.verify(token, this.secret);
  }
}
