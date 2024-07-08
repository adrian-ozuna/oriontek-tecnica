import { Address } from "./address.model";

export interface Client {
    clientId: number;
    firstName: string;
    lastName: string;
    companyId: number;
    addresses?: Address[];
  }
  