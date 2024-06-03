import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
