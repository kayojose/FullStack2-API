interface ListPartnerClientsDTO {
  id: string,
  name: string;
}

interface ListPartnerProjectsDTO {
  id: string,
  name: string
}

export class ListPartnerDTO {
  constructor(
    readonly id: string, 
    readonly name: string, 
    readonly description: string,
    readonly repositoryGit: string,
    readonly urlDoc: string, 
    readonly clients: ListPartnerClientsDTO[],
    readonly projects: ListPartnerProjectsDTO[], 
    
  ) {}
}