import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterRemove,
  AfterUpdate,
  AfterInsert,
} from "typeorm";
import { Exclude } from "class-transformer";

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log("Insert User with id", this.id);
  }
  @AfterUpdate()
  logUpdate() {
    console.log("Update User with id", this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log("Removed User with id", this.id);
  }
}
