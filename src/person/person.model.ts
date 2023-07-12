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

@Entity()
export class Person extends AppEntity {
    
    @Column()
    FIO: string;

    @Column()
    position: string;

    @Column()
    percent: number;

    @Column()
    salary: number;
    
}
