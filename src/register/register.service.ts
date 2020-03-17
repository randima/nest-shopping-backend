import { Injectable } from '@nestjs/common';
import { RegisterInfoDto } from './dto/register-info.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class RegisterService {

    constructor(
        // @InjectRepository(UserRepository)
        // private userRepository: UserRepository
        private authService:AuthService
      ) {} 

    register(registerData: RegisterInfoDto): Promise<void> {
         return this.authService.register(registerData);
    }
}
