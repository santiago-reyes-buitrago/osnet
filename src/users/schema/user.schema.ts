import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
export enum roles {
    Admin = 'Administrador',
    Client = 'Cliente',
}
@Schema()
export class User{
    @Prop()
    name: string;
    @Prop({required:true})
    email: string;
    @Prop()
    password: string;
    @Prop({default: roles.Client})
    role: roles;
    @Prop({default: Date.now() })
    date: Date

}

export const UserSchema = SchemaFactory.createForClass(User);