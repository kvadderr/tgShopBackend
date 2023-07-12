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
import { Product } from '../product/product.model';

@Entity()
export class Order extends AppEntity {
    
    @ManyToOne(() => Person)
    @JoinColumn()
    person: Person;

    @Column()
    personId: number;

    @ManyToOne(() => Product)
    @JoinColumn()
    product: Product;

    @Column()
    productId: number;
    
    @Column()
    when: Date;

    @Column()
    count: number;

    @Column()
    price: number;

    @Column()
    clientFIO: string;
    
}
