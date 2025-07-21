import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://judhisahoo:shJtv3Q3mRxIsyQA@judhisahoo-demo.y7sqnyv.mongodb.net/?retryWrites=true&w=majority&appName=judhisahoo-demo"),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
