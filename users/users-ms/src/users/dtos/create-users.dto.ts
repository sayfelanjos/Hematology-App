import { IsEmail, IsString } from "class-validator";

export class CreateUsersDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
