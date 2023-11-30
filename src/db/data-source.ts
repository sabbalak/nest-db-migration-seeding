import { config } from 'dotenv';
import { User } from './../resource/users/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import UserSeeder from './seeds/user.seeder';
import userFactory from './factories/user.factory';

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  seeds: [UserSeeder],
  factories: [userFactory],
};

export default new DataSource(dataSourceOptions);
