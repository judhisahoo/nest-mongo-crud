import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DemoUser } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(DemoUser.name) private userModel: Model<DemoUser>) {}
  create(createUserDto: CreateUserDto) {
    const newDemoUser = new this.userModel(createUserDto);
    //return 'This action adds a new user';
    return newDemoUser.save();
  }

  findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (user) return user;
    return new HttpException('user not found', 404);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findById(id).exec();
    if (user) return this.userModel.findByIdAndUpdate(id, updateUserDto);
    return new HttpException('user not found', 404);
  }

  async remove(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (user) return this.userModel.findByIdAndDelete(id);
    return new HttpException('user not found', 404);
  }
}
