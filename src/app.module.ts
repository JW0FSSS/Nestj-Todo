import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    TaskModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
