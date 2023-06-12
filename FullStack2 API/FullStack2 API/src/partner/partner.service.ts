import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ListPartnerDTO } from './dto/ListPartner.dto';
import { UpdatePartnerDTO } from './dto/UpdatePartner.dto';

import { PartnerEntity } from './partner.entity';



@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(PartnerEntity)
    private readonly partnerRepository: Repository<PartnerEntity>,
  ) {}

  
  async getPartners() : Promise<ListPartnerDTO[] | undefined> {
    const savedPartners = await this.partnerRepository.find();
    const partnersList = savedPartners.map(
      (partner) => new ListPartnerDTO(partner.id, partner.name, partner.description, partner.repositoryGit, partner.urlDoc, partner.clients, partner.projects),
    );
    return partnersList;
  }

  async getPartnerById(id: string) : Promise<ListPartnerDTO | undefined> {
    const partner = await this.partnerRepository.findOne({ where: { id }});
    const partnerResp = new ListPartnerDTO(partner.id, partner.name, partner.description, partner.repositoryGit, partner.urlDoc, partner.clients, partner.projects);

    return partnerResp;
  }

  async findByName(name: string) : Promise<ListPartnerDTO | undefined> {
    const partner = await this.partnerRepository.findOne({ where: { name } });
    const partnerResp = new ListPartnerDTO(partner.id, partner.name, partner.description, partner.repositoryGit, partner.urlDoc, partner.clients, partner.projects);

    return partnerResp;
  }

  async createPartner(partnerToCreate: PartnerEntity) {
    await this.partnerRepository.save(partnerToCreate);
    const partnerCreated = await this.getPartnerById(partnerToCreate.id);

    return partnerCreated;
  }

  async updatePartner(id: string, newData: UpdatePartnerDTO)  {
    await this.partnerRepository.update(id, newData);

    const partnerUpdated = this.getPartnerById(id);

    return partnerUpdated;
  }
  
  async deletePartner(id: string) {
    await this.partnerRepository.delete(id);
  }

  // async getClients() {
  //   const clientsSaved = await this.partnerClientsRepository.find();
  //   const clientsList = clientsSaved.map(
  //     (clients) => new ListClients(clients.id, clients.name,),
  //   );
  //   return clientsList;
  // }

  // async getProjects() {
  //   const projectsSaved = await this.partnerProjectsRepository.find();
  //   const projectsList = projectsSaved.map(
  //     (projects) => new ListProjects(projects.id, projects.name,),
  //   );
  //   return projectsList;
  // }

  // async checkClientsToCreate( clientsToCreate ) : Promise<ListClients[]> {
  //   const clientsSaved = await this.getClients();
  //   let clientsToSave : Array<any> = [];

  //   clientsToSave = clientsSaved.map(clientSaved => {
  //     clientsToCreate.forEach(clientToCreate => {
  //       if (clientToCreate.name === clientSaved.name) 
  //         return { id: clientSaved.id, name: clientSaved.name }
  //       else return { id: clientToCreate.id, name: clientToCreate.name }
  //     })
  //   })

  //   return clientsToSave;
  // }

  // async checkProjectsToCreate( projectsToCreate ) : Promise<ListProjects[]> {
  //   const projectsSaved = await this.getProjects();
  //   let projectsToSave : Array<any> = [];
    
  //   projectsToSave = projectsSaved.map(projectSaved => {
  //     projectsToCreate.forEach(projectToCreate => {
  //       if (projectToCreate.name === projectSaved.name) 
  //         return { id: projectSaved.id, name: projectSaved.name }
  //       else return { id: projectToCreate.id, name: projectToCreate.name }
  //     })
  //   })

  //   return projectsToSave;
  // }
  
}
