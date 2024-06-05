// src/activity/schemas/schema.activity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ActivityDocument = Activity & Document;

@Schema()
export class Activity {
    @Prop({ required: true })
    id: number;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;
    
    @Prop({ required: true })
    status: boolean;

    @Prop({ required: true })
    score: number;

    @Prop({ required: true })
    picture: string;

}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
