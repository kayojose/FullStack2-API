import { 
  IsNotEmpty, 
  IsUrl,
  IsString, 
  ValidateNested, 
  ArrayMinSize, 
  IsArray } from 'class-validator';
import { PartnerEntity } from '../partner.entity';
import { Type } from 'class-transformer';
import { IsPartnerNameUnique } from '../is-partnerName-unique.validator';

export class ClientPartnerDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo nome é obrigatório' })
  name: string;

  partner: PartnerEntity;
}

export class ProjectsPartnerDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo nome é obrigatório' })
  name: string;

  partner: PartnerEntity;
}

export class CreatePartnerDTO {
  //@IsPartnerNameUnique({message: "Parceiro com nome já existente"})
  @IsNotEmpty({ message: 'Campo nome é obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'Campo descrição é obrigatório' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'Campo repositório do git é obrigatório' })
  @IsString()
  @IsUrl()
  repositoryGit: string;

  @IsNotEmpty({ message: 'Campo repositório do git é obrigatório' })
  @IsString()
  @IsUrl()
  urlDoc: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ClientPartnerDTO)
  clients: ClientPartnerDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProjectsPartnerDTO)
  projects: ProjectsPartnerDTO[];
}