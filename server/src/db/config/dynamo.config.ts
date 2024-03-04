import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DynamoDB } from 'aws-sdk';

@Injectable()
export class DynamoConfigService {
  private readonly dynamoClient: DynamoDB.DocumentClient;

  constructor(private readonly configService: ConfigService) {
    this.dynamoClient = new DynamoDB.DocumentClient({
      region: this.configService.get<string>('DYNAMODB_REGION'),
      accessKeyId: this.configService.get<string>('DYNAMODB_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>(
        'DYNAMODB_SECRET_ACCESS_KEY',
      ),
      endpoint: this.configService.get<string>('DYNAMODB_ENDPOINT'),
    });
  }

  getClient(): DynamoDB.DocumentClient {
    return this.dynamoClient;
  }
}
