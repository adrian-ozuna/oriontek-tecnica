import { Address } from "../address/address.model";

export interface Client {
    id: number;
    firstName: string;
    lastName: string;
    addresses: Address[];
}