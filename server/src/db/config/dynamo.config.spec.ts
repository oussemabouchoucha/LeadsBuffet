import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DynamoConfigService } from './dynamo.config';

describe('Dynamo Configuration Validation', () => {
  let dynamoConfigService: DynamoConfigService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
      providers: [DynamoConfigService],
    }).compile();

    dynamoConfigService = module.get<DynamoConfigService>(DynamoConfigService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should validate DYNAMODB_REGION is a string', () => {
    const dynamoRegion: string = configService.get<string>('DYNAMODB_REGION');
    expect(typeof dynamoRegion).toBe('string');
  });

  it('should validate DYNAMODB_ACCESS_KEY_ID is a string', () => {
    const dynamoAccessKeyId: string = configService.get<string>(
      'DYNAMODB_ACCESS_KEY_ID',
    );
    expect(typeof dynamoAccessKeyId).toBe('string');
  });

  it('should validate DYNAMODB_SECRET_ACCESS_KEY is a string', () => {
    const dynamoSecretAccessKey: string = configService.get<string>(
      'DYNAMODB_SECRET_ACCESS_KEY',
    );
    expect(typeof dynamoSecretAccessKey).toBe('string');
  });

  it('should validate DYNAMODB_ENDPOINT is a string', () => {
    const dynamoEndpoint: string =
      configService.get<string>('DYNAMODB_ENDPOINT');
    expect(typeof dynamoEndpoint).toBe('string');
  });

  it('should validate DynamoDB.DocumentClient is not null', () => {
    const dynamoClient = dynamoConfigService.getClient();
    expect(dynamoClient).not.toBeNull();
  });

  it('should validate DynamoDB.DocumentClient is an object', () => {
    const dynamoClient = dynamoConfigService.getClient();
    expect(typeof dynamoClient).toBe('object');
  });

  afterAll(async () => {
    // Cleanup, if needed
  });
});
