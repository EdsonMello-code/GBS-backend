import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Storage } from './Storage';
import { User } from './User';


@Entity('items')
class Item {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;
  
  @Column()
  material?: string;

  @Column()
  weight?: string;

  @Column()
  classification?: string;

  @Column()
  description?: string;

  @Column()
  url?: string;

  @Column()
  storagesId?: number;

  @Column()
  userId?: number;
  
  @Column()
  category?: string;

  @Column()
  price?:string;

  @ManyToOne(() => Storage, storage => storage.items)
  storages?: Storage;

  @ManyToOne(() => User, user => user.items)
  user?: User;

}

export { Item };

