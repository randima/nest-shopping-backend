import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    ProductsModule,
    RegisterModule,
    AuthModule,
    LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
