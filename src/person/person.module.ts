import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { Person } from './person.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Person]),
  ],
  providers: [PersonService],
  controllers: [PersonController],
  exports: [PersonService, PersonModule],
})
export class PersonModule {}
