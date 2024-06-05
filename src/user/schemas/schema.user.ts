// src/user/schemas/schema.activity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    STDid: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;


    @Prop({ required: true })
    phone: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
