import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { PartnerClientsEntity } from './partner-clients.entity';
import { PartnerProjectsEntity } from './partner-projects.entity'

@Entity({ name: 'parceiros' })
export class PartnerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;

  @Column({ name: 'repositoryGit', length: 255, nullable: false })
  repositoryGit: string;

  @Column({ name: 'urlDoc', length: 255, nullable: false })
  urlDoc: string;

  @OneToMany(() => PartnerClientsEntity, (partnerClientsEntity) =>
      partnerClientsEntity.partner, { cascade: true, eager: true })
  clients: PartnerClientsEntity[];

  @OneToMany(() => PartnerProjectsEntity, (partnerProjectsEntity) =>
      partnerProjectsEntity.partner, { cascade: true, eager: true })
  projects: PartnerProjectsEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}