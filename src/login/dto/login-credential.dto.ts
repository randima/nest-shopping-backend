import { IsEmail } from "class-validator";

export class LoginCredntialDto{

    @IsEmail()
    email:string;
    
    password:string;
}