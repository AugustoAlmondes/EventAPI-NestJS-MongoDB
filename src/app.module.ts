import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

config();

@Module({
  imports: [EventModule, UserModule, MongooseModule.forRoot(`mongodb+srv://augusto7666_db_user:${process.env.DB_PASSWORD}@teste1.prp4ukj.mongodb.net/?appName=Teste1`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
