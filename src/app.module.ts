import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { UsersModule } from './resource/users/users.module';

@Module({
  imports: [UsersModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }