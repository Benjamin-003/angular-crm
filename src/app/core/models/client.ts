import { StateClient } from './../enums/state-client';
import { ClientI } from './../interfaces/client-i';



export class Client implements ClientI{
  tauxTva = 20;
  state = StateClient.ACTIVE;
  name!: string;
  comment!: string;
  id!: number;
  totalCaHt!: number;
  constructor(obj?: Partial<Client>) {
      if(obj){Object.assign(this, obj)}
  }
  totalHT(): number {
      return this.totalCaHt
  }
  totalTTC() {
    return this.totalCaHt * (1 + this.tauxTva / 100);
  }
}
