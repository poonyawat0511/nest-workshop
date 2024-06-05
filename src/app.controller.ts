import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatService } from './cat/cat.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catService: CatService
  ) {}

  @Get()
  getTest(): string {
    // return this.appService.getTest();
    return this.catService.getCat();
  }
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
