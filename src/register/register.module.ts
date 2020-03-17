import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService],
  imports:[AuthModule]  

})
export class RegisterModule {}
