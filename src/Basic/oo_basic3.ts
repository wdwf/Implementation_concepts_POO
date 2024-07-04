//Definição de classe com atributos sendo array 
export class User {
  public name: string;
  public email: string;
  public active: boolean;
  private _address: Address[] = [];

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name;
    this.email = email;
    this.active = active;
  }

  public set address(newAddress: Address) {
    this._address.push(newAddress);
    return;
  }

  public get address(): Address[] {
    return this._address
  }

}

export class Address {
  constructor(
    public address: string,
    public zipCode: string,
    public number: number
  ) { }
}

const address = new Address("Rua y", "04235645", 54);
const address2 = new Address("Rua x", "04235646", 24);
const user = new User("Bob", "b@email.com", true);
user.address = address;
user.address = address2;

console.log(user);
