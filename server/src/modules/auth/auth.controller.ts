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
  @UsePipes(
    new JoiValidationPipe(
      Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      }),
    ),
  )
  login(@Body() loginUser: LoginDto) {
    return this.authService.login(loginUser);
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }

  @Post('forgot-password')
  @UsePipes(
    new JoiValidationPipe(
      Joi.object({
        email: Joi.string().email().required(),
      }),
    ),
  )
  forgotPassword(@Body() { email }: { email: string }) {
    return this.authService.forgotPassword(email);
  }

  @Post('verify-reset')
  verifyResetPasswordToken(
    @Body() { id, token }: { id: string; token: string },
  ) {
    return this.authService.verifyResetPasswordToken(id, token);
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

  @Get('protected')
  @UseGuards(LocalGuard)
  protected() {
    return 'Protected route';
  }
}
