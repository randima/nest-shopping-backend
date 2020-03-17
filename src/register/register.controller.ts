import { Controller, Post, Body } from '@nestjs/common';
import { RegisterInfoDto } from './dto/register-info.dto';
import { RegisterService } from './register.service';

@Controller('api/v1/register')
export class RegisterController {

    constructor(private registerService:RegisterService){}


    @Post()
    register(@Body() registerData:RegisterInfoDto):Promise<void>{
        return this.registerService.register(registerData);
    }
}
