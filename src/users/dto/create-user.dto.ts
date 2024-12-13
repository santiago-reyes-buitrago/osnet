import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { roles } from "../schema/user.schema";
export class CreateUserDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  readonly role: roles;
  @ApiPropertyOptional()
  readonly date?: Date
  }