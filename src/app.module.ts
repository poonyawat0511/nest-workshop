import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityModule } from './activity/activity.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatModule } from './cat/cat.module';
import { DogController } from './dog/dog.controller';
import { UserModule } from './user/user.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/HelloData?authSource=admin'),CatModule, ActivityModule, UserModule],
  // imports: [CatModule, BirdsModule],
  controllers: [AppController, DogController,CatController],
  providers: [AppService],
})
export class AppModule { }
