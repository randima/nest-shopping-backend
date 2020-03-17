import { Controller, Post, Body } from '@nestjs/common';
import { LoginCredntialDto } from './dto/login-credential.dto';
import { LoginService } from './login.service';

@Controller('api/v1/login')
export class LoginController {

  constructor(private loginService: LoginService) { }

  @Post()
  login(@Body() loginCredential: LoginCredntialDto): Promise<{ accessToken: string }> {
    return this.loginService.login(loginCredential);
  }
}
