import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTest(): string {
    return 'OMG';
  }


  getHello(): string {
    return 'Hello World!';
  }


}
