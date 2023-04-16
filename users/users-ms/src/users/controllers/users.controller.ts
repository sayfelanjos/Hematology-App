import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Query,
  Param,
  Delete,
  NotFoundException,
  Session,
} from "@nestjs/common";
import { Serialize } from "../../interceptors/serialize.interceptor";
import { CreateUsersDto } from "../dtos/create-users.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { UsersService } from "../services/users.service";
import { UsersDto } from "../dtos/users.dto";
import { AuthService } from "../services/auth.service";

@Controller("auth")
@Serialize(UsersDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}
  @Post("/signup")
  async createUser(@Body() body: CreateUsersDto, @Session() session: any) {
    const user = await this.usersService.create(body.email, body.password);
    session.userid = user.id;
    return user;
  }

  @Post("/signin")
  async signin(@Body() body: CreateUsersDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userid = user.id;
    return user;
  }

  @Get("/:id")
  async findUser(@Param("id") id: string) {
    const user = this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException("user not found");
    }
    return user;
  }

  @Get()
  findAllUsers(@Query("email") email: string) {
    return this.usersService.find(email);
  }

  @Delete()
  removeUser(@Param("id") id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch("/:id")
  updateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
