/* eslint-disable prettier/prettier */
import { roles } from "../schema/user.schema";
export class UpdateUserDto {
    readonly name?: string;
    readonly email?: string;
    readonly password?: string;
    readonly role?: roles;
    readonly date?: Date
  }