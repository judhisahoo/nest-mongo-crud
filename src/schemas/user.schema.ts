import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = DemoUser & Document;

@Schema()
export class DemoUser {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  dob: Date;

  @Prop({ required: true })
  status: boolean;
}

export const DemoUserSchema = SchemaFactory.createForClass(DemoUser);
