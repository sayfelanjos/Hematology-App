import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { scrypt as _scrypt } from "crypto";
import { promisify } from "util";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException("user not found");
    }
    const [storeSalt, storeHash] = user.password.split(".");
    const hash = (await scrypt(password, storeSalt, 32)) as Buffer;
    if (storeHash !== hash.toString("hex")) {
      throw new BadRequestException("bad password");
    }
    return user;
  }
}
