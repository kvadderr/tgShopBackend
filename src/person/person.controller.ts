import {
    Body,
    Controller,
    Get,
    HttpException,
    Param,
    Put,
    Delete,
    Post,
    UseGuards,
    Query
  } from '@nestjs/common';

import { Person } from './person.model';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}
 
  @Get()
  getStaff() {
    return this.personService.getPersons();
  }

  @Post()
  savePerson(@Body() person: Person) {
    return this.personService.savePerson(person);
  }

}