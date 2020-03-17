import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule} from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';

@Module({
   
    providers:[
        JwtStrategy,
        AuthService,
    ],

    imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: "mytopsecret101",
      signOptions: {
        expiresIn: 3600,
      },
    }),      
      TypeOrmModule.forFeature([UserRepository]),
    ], 
    exports:[
        JwtStrategy,
        PassportModule,
        AuthService,       
    ],   
  })
export class AuthModule {}
