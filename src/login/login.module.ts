import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports:[AuthModule,]
})
export class LoginModule {}
