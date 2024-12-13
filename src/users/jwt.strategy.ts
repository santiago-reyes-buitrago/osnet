import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import {PassportStrategy} from "@nestjs/passport";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: process.env.SECRET,
        });
      }
    
      async validate(payload: any) {
        return { userId: payload.id};
      }
}