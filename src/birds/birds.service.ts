import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';


@Injectable()
export class BirdsService {

  private birds: Array<any> = [];


  create(createBirdDto: CreateBirdDto) {
    const { name, age, food, isFeed } = createBirdDto;
    const data = { name, age, food, isFeed }
    this.birds.push(data);
    return data;
  }

  findAll() {
    return this.birds;
  }

  findOne(id: number) {
    const bird = this.birds[id];
    if (!bird) {
      throw new NotFoundException('bird not found');
    }
    return bird;
  }

  update(id: number, updateBirdDto: UpdateBirdDto) {

    const bird = this.birds[id];

    if (!bird) {
      throw new NotFoundException('bird not found');
    }
    const { name, age, food, isFeed } = updateBirdDto;
    // this.birds[id] = data;
    Object.assign(bird,updateBirdDto)

    return bird;
  }

  remove(id: number) {
    const bird = this.birds[id];

    if (!bird) {
      throw new NotFoundException('bird not found');
    }
    this.birds.splice(id, 1);
    return bird;
  }
}
