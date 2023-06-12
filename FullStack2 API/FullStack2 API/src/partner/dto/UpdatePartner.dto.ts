import { Type } from 'class-transformer';
import { 
  ArrayMinSize, 
  IsArray, 
  IsString, 
  IsOptional, 
  IsUrl, 
  ValidateNested, 
  } from 'class-validator';
import { ClientPartnerDTO, ProjectsPartnerDTO } from './CreatePartner.dto';

export class UpdatePartnerDTO {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsUrl()
  @IsOptional()
  repositoryGit: string;

  @IsUrl()
  @IsOptional()
  urlDoc: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ClientPartnerDTO)
  @IsOptional()
  clients: ClientPartnerDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProjectsPartnerDTO)
  @IsOptional()
  projects: ProjectsPartnerDTO[];
}