import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './Item';
import { User } from './User';


@Entity('storages')
class Storage {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;

  @Column()
  address?: string;

  @Column()
  url?: string;
  
  @Column()
  latitude?: number;

  @Column()
  longitude?: number;

  @Column()
  userId?: number;

  @OneToMany(() => Item, item => item.storages)
  items?: Item[];
   
  @ManyToOne(() => User, item => item.storages)
  user?: User;

}

export { Storage };
