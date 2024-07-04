/* -- Visibility
* public
* private - Acesso ao atributo apenas na própria class
* protect - só pode ser acessado na própria classe ou nas classe que o herdem
*/

import { Address } from "./oo_basic2";

export class User {
  private _name: string;
  private _email: string;
  private _active: boolean;
  private _address: Address[] = [];

  constructor(name: string, email: string, active: boolean = false) {
    this._name = name;
    this._email = email;
    this._active = active;
  }

  public addAdress(newAddress: Address): void {
    this._address.push(newAddress);
  }

  public changeName(name: string): void | Error {
    if (!name) {
      throw new Error("Name empty");
    }
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
}

const user1 = new User("User 1", "user@email.com")
user1.changeName("NewNameUser")
console.log(user1.name);
