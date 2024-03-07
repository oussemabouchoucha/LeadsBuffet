import { Injectable, NotAcceptableException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthPayloadDto } from './dto/auth.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerUser: RegisterDto) {
    const userExists = await this.userRepository.findOne({
      where: { email: registerUser.email },
    });

    if (userExists) return new NotAcceptableException('User already exists');
    registerUser.password = await this.hashPassword(registerUser.password);

    const user = this.userRepository.create(registerUser);
    const savedUser = await this.userRepository.save(user);
    const token = await this.generateJwtToken(savedUser);

    return token;
  }

  login(loginUser: LoginDto) {
    return this.validateUser(loginUser);
  }

  logout() {
    return 'Logged out';
  }

  getAll() {
    return this.userRepository.find({
      select: ['id', 'username', 'email', 'role'],
    });
  }

  async validateUser({ username, password }: AuthPayloadDto) {
    const findUser = await this.userRepository.findOne({ where: { username } });
    if (!findUser) return null;
    if (await this.comparePasswords(password, findUser.password)) {
      return await this.generateJwtToken(findUser);
    }
  }

  async generateJwtToken(user: User) {
    const payload = {
      username: user.username,
      sub: user.id,
      role: user.role,
      email: user.email,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }
}
