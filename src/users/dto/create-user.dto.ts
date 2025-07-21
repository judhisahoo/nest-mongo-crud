import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 12, {
    message: 'username length Must be between 6 and 12 charcters',
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 50, {
    message: 'username length Must be between 6 and 50 charcters',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 50, {
    message: 'username length Must be between 6 and 50 charcters',
  })
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsNumber()
  age: number;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dob: Date;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
}
