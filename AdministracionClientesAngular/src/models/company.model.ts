import { Client } from "./client.model";

export interface Company {
    id: number;
    name: string;
    clients?: Client[];
  }
  