import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { IDatabaseDriver, Connection } from "@mikro-orm/core";
import { user } from "../../Entities/user";
export const getAllUsers = async (
  ctx: MikroORM<IDatabaseDriver<Connection>>
) => {
  let result = await ctx.em.find(user, {});
  return result;
};

export const createUser = async (
  ctx: MikroORM<IDatabaseDriver<Connection>>,
  body: any
) => {
  // this is basically what you are doing and will fail as the prototype
  // is just `Object` - which is what you see in the error

  const dto = {
    userName: body.userName,
    password: body.password,
    email: body.email,
    firstName: body.firstName,
    lastName: body.lastName,
    phone: body.phone,
  };
  const userto = ctx.em.create(user, dto);

  // and this is what you need to do instead
  ctx.em.persistAndFlush(userto);

  // return userToBeAdded;
  return "hi";
};
