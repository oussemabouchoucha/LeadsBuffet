import { Controller, Get } from '@nestjs/common';
import { JwtService } from 'src/services/jwt.service';

@Controller('user')
export class UserController {
  constructor(private readonly jwtService: JwtService) {}

  @Get('login')
  login(): { token: string } {
    // Replace with your actual user authentication logic
    const user = { username: 'john_doe', role: 'admin' };
    const token = this.jwtService.generateToken(user, '1h');
    return { token };
  }
}
