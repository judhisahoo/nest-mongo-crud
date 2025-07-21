import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  @Length(6, 12, {
    message: 'username length Must be between 6 and 12 charcters',
  })
  username?: string;

  @IsString()
  @IsOptional()
  @Length(5, 50, {
    message: 'username length Must be between 6 and 50 charcters',
  })
  name?: string;

  @IsString()
  @Length(5, 50, {
    message: 'username length Must be between 6 and 50 charcters',
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsNumber()
  @IsOptional()
  age?: number;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  dob?: Date;

  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
