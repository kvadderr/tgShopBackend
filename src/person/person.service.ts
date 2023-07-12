import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.model';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async getPersons() {
    return this.personRepository.find();
  }

  async savePerson(person: Partial<Person>): Promise<Person> {
    return this.personRepository.save(person);
  }
}
