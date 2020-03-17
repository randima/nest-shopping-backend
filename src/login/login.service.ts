import { Injectable } from '@nestjs/common';
import { LoginCredntialDto } from './dto/login-credential.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class LoginService {

    constructor(
        private authService: AuthService) { }


    async login(loginCredential: LoginCredntialDto): Promise<{ accessToken: string }> {
        return this.authService.validate(loginCredential);
    }
}
