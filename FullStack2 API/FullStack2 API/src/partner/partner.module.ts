import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerController } from './partner.controller';
import { PartnerService } from './partner.service';
import { PartnerEntity } from './partner.entity';
import { IsPartnerNameUniqueConstraint } from './is-partnerName-unique.validator';


@Module({
  imports: [TypeOrmModule.forFeature([PartnerEntity])],
  controllers: [PartnerController],
  providers: [PartnerService, IsPartnerNameUniqueConstraint],
})
export class PartnerModule {}