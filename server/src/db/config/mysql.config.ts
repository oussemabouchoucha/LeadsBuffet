import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: MYSQL_HOST,
  port: Number(MYSQL_PORT),
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: 'leadsbuffet',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: true,
};

// Validate required environment variables
const requiredEnvVariables = [
  'MYSQL_HOST',
  'MYSQL_PORT',
  'MYSQL_USER',
  'MYSQL_PASSWORD',
];
for (const envVar of requiredEnvVariables) {
  if (!process.env[envVar]) {
    throw new Error(`Please set the environment variable: ${envVar}`);
  }
}

export default config;
