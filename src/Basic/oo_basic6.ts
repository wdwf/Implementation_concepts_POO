//Herança
import { Address } from "./oo_basic2";

export class User {
  protected _name: string;
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

class Manager extends User {

  public get name(): string {
    return `Manager: ${this._name}`;
  }
}

const manager1 = new Manager("Jon", "JJ@email.com", true);
console.log(manager1);
console.log(manager1.name);

class Admin extends User {
}