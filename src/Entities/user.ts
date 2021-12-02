import "reflect-metadata";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class user {
  @PrimaryKey()
  id!: number;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  firstName!: string;

  @Property({ type: "text" })
  lastName!: string;

  @Property({ unique: true })
  userName!: string;

  @Property({ unique: true })
  email!: string;

  @Property()
  password!: string;

  @Property({ unique: true })
  phone!: string;

  @Property({ nullable: true })
  imgUrl: string;
}
