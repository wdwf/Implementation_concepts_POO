//Definição de classe

import { Address } from "./oo_basic2";

export class User {
  public name: string;
  public email: string;
  public active: boolean;
  public address: Address;

  constructor(name: string, email: string, address: Address, active: boolean = false) {
    this.name = name;
    this.email = email;
    this.active = active;
    this.address = address;
  }
}
const address1 = new Address("Rua x", '75702-050', 54);
const BOB = new User("Bob", "b@email.com", address1,)
console.log(BOB);
console.log(BOB.name);
