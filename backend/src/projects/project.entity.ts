import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'details' }) // Connects to the 'projects' table in portofolio_db
export class Project {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 150, nullable: true })
  title?: string | null;

  @Column({ type: 'varchar', length: 150 })
  slug!: string;

  @Column('text', { nullable: true })
  short_description!: string | null;

  @Column('text', { nullable: true })
  full_description!: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  category!: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  role!: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  status!: string | null;

  @Column('date', { nullable: true })
  start_date!: Date | null;

  @Column('date', { nullable: true })
  end_date!: Date | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cover_image!: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  github_url!: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  demo_url!: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  documentation_url!: string | null;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
