import { ApiProperty } from "@nestjs/swagger";
export class LoginUserDto {
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  password: string;
}