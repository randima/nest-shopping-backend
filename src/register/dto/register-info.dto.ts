import { Length, IsString, Matches, IsEmail, IsMobilePhone, MinLength, MaxLength } from "class-validator";

export class RegisterInfoDto{
    @IsString()
    firstname:string;

    @IsString()
    lastname:string;

    @IsEmail()
    email: string;

    @IsString()
    @Length(2)
    areacode:string;

    @IsMobilePhone('any')
    @Matches(/(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)/,{message:'Must be phone number'})
    phone:string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'password too weak' },
      )
    password: string;
}