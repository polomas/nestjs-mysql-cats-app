import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
    BreedsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
