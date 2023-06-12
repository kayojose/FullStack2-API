import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm';
import { PartnerEntity } from './partner.entity';

@Entity({ name: 'parceiros_clientes' })
export class PartnerClientsEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @ManyToOne(() => PartnerEntity, (partner) => partner.clients, { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  partner: PartnerEntity;
}