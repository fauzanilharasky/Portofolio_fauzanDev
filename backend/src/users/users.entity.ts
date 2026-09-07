import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn('increment')
  id_user!: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  username!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email!: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  role!: string;
}
