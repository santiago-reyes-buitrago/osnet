import { ApiProperty } from "@nestjs/swagger";
import { roles } from "../schema/user.schema";
export class CreateUserDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly password: string;
  @ApiProperty()
  readonly role: roles;
  @ApiProperty()
  readonly date: Date
  }