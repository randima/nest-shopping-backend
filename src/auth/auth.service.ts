import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginCredntialDto } from 'src/login/dto/login-credential.dto';
import { RegisterInfoDto } from 'src/register/dto/register-info.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
        ) { }


    async validate(loginCredential: LoginCredntialDto): Promise<{ accessToken: string }> {
        const payload =await this.userRepository.validateUser(loginCredential);

        if (!payload) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const accessToken = await this.jwtService.sign(payload);

        return { accessToken };
    }

    register(registerData: RegisterInfoDto): Promise<void> {
        return this.userRepository.register(registerData);
   }
}
