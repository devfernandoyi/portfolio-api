import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PetLog } from '../pet-logs/pet-logs.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column({ nullable: true })
  morph: string;

  @Column({ nullable: true })
  genus: string;

  @Column({ nullable: true })
  origin: string;

  @Column({ nullable: true })
  about: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => PetLog, (log) => log.pet)
  logs: PetLog[]; // This pet has many logs
}
