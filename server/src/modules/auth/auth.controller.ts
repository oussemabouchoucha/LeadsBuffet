import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import * as Joi from '@hapi/joi';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(
    new JoiValidationPipe(
      Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        role: Joi.string().required().valid('user', 'admin'),
      }),
    ),
  )
  register(@Body() registerUser: RegisterDto) {
    return this.authService.register(registerUser);
  }

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Body() loginUser: LoginDto) {
    return this.authService.login(loginUser);
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }

  @Get()
  getAll() {
    return this.authService.getAll();
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: { user: any }) {
    return req.user;
  }
}
