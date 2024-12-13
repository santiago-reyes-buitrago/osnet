import { ApiPropertyOptional } from "@nestjs/swagger";
import { roles } from "../schema/user.schema";
export class UpdateUserDto {
  @ApiPropertyOptional()
  readonly name?: string;
  @ApiPropertyOptional()
  readonly email?: string;
  @ApiPropertyOptional()
  readonly password?: string;
  @ApiPropertyOptional()
  readonly role?: roles;
  @ApiPropertyOptional()
  readonly date?: Date
}