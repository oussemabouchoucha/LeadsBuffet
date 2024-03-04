import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { AppService } from '../../app.service';

describe('Configuration Validation', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let appService: AppService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should validate MYSQL_HOST is a string', () => {
    const mysqlHost: string = configService.get<string>('MYSQL_HOST');
    expect(typeof mysqlHost).toBe('string');
  });

  it('should validate MYSQL_PORT is a number', () => {
    const mysqlPort: number = configService.get<number>('MYSQL_PORT');
    expect(isNaN(mysqlPort)).toBe(false);
  });

  it('should validate MYSQL_USER is a string', () => {
    const mysqlUser: string = configService.get<string>('MYSQL_USER');
    expect(typeof mysqlUser).toBe('string');
  });

  it('should validate MYSQL_PASSWORD is a string', () => {
    const mysqlPassword: string = configService.get<string>('MYSQL_PASSWORD');
    expect(typeof mysqlPassword).toBe('string');
  });

  it('should validate MYSQL_DATABASE is a string', () => {
    const mysqlDatabase: string = configService.get<string>('MYSQL_DATABASE');
    expect(typeof mysqlDatabase).toBe('string');
  });

  it('should validate MYSQL_HOST is equal to db if env is dev or test', () => {
    const mysqlHost: string = configService.get<string>('MYSQL_HOST');
    const env: string = configService.get<string>('NODE_ENV');
    if (env === 'dev' || env === 'test') {
      expect(mysqlHost).toBe('db');
    }
  });

  afterAll(async () => {
    // Cleanup, if needed
  });
});
