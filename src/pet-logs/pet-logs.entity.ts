import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pet } from '../pets/pets.entity';

@Entity()
export class PetLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  petId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  weight?: number;

  @Column({ nullable: true })
  length?: string;

  @Column({ nullable: true })
  fedWhat?: string;

  @Column({ nullable: true })
  hotTemp?: number;

  @Column({ nullable: true })
  coolTemp?: number;

  @Column({ nullable: true })
  humidity?: number;

  @Column({ default: false })
  fed: boolean;

  @Column({ default: false })
  shed: boolean;

  @Column({ default: false })
  fecal: boolean;

  @Column({ nullable: true })
  notes?: string;

  @ManyToOne(() => Pet, (pet) => pet.logs)
  pet: Pet;
}
