/*
 * O uso do readonly serve para impedir sua alteração sendo definido apenas no construtor
*/
export class Address {
  constructor(
    public address: string,
    public readonly zipCode: string,
    public number: number
  ) { }

  changeZipCode(newZipCode: string): void {
    // this.zipCode = newZipCode; // erro
  }
}

const addrees = new Address("Rua tal", "04235465", 54);
// addrees.zipCode = "01455656" // erro