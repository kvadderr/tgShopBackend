import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './product/product.model';
import { Person } from './person/person.model';

import { ProductModule } from './product/product.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database:process.env.POSTGRES_DB,
      host:process.env.POSTGRES_HOST,
      port:+process.env.POSTGRES_PORT,
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      synchronize: true,
      migrationsRun: true,
      entities: [
        Product,
        Person,
      ],
      subscribers: ['dist/subscriber/*.js'],
      migrations: ['dist/migration/*.js'],
    }),
    ProductModule,
    PersonModule,
  ],
  providers: [],
})
export class AppModule {}
