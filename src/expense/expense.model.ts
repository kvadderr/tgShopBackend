import {
    Entity,
    Column,
    OneToMany,
    DeleteDateColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne
} from 'typeorm';

import { AppEntity } from '../base/BaseEntity';
import { Person } from '../person/person.model';

@Entity()
export class Expense extends AppEntity {
    
    @ManyToOne(() => Person)
    @JoinColumn()
    person: Person;

    @Column()
    personId: number;

    @Column()
    name: string;

    @Column()
    when: Date;

    @Column()
    price: number;

    @Column()
    salary: number;
    
}
