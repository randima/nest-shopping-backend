
import bcrypt = require('bcrypt');
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterInfoDto } from 'src/register/dto/register-info.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { LoginCredntialDto } from 'src/login/dto/login-credential.dto';
import { JwtPayload } from './jwt-payload.interface';

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async register(registerData: RegisterInfoDto): Promise<void> {
        const { firstname, lastname, email, password, areacode, phone } = registerData

        const user = new User();
        user.email = email;
        user.firstname = firstname;
        user.lastname = lastname;
        user.telephone = areacode + phone;
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(password, user.salt);

        try {
            await user.save();
        } catch (error) {
            if (error.code === '23505') { // duplicate username
                throw new ConflictException('Email already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUser(loginCredential: LoginCredntialDto): Promise<JwtPayload> {
        const { email, password } = loginCredential;

        const user = await this.findOne({ email })

        if (user && await user.validatePassword(password)) {
            return { email: user.email, firstname: user.firstname, lastname: user.lastname };
        } else {
            return null;
        }
    }

}