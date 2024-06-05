// src/activity/activity.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './schemas/schema.activity';

@Injectable()
export class ActivityService {
  constructor(@InjectModel(Activity.name) private activityModel: Model<Activity>) { }

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    const createdActivity = new this.activityModel(createActivityDto);
    return createdActivity.save();
  }

  async findAll(): Promise<Activity[]> {
    return this.activityModel.find().exec();
  }

  async findOne(id: string): Promise<Activity> {
    return this.activityModel.findById(id).exec();
  }

  async update(id: string, updateActivityDto: UpdateActivityDto): Promise<Activity> {
    return this.activityModel.findByIdAndUpdate(id, updateActivityDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Activity> {
    return this.activityModel.findByIdAndDelete(id).exec();
  }
  
  async deleteAll(): Promise<void> {
    try {
      await this.activityModel.deleteMany({});
    } catch (error) {
      throw new Error('Failed to delete all activities');
    }
  }
}
