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
export class Product extends AppEntity {
    
    @Column()
    name: string;

    @Column()
    price: number;

}
