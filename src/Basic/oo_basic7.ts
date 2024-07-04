//Super
/**
 * Usado para pegar algo da classe que se estende/anterior
 * 
 * Caso tenhamos que reescrever o construtor de uma classe que recebe a herança para 
 * adicionar qualquer propriedade devemos usar o super 
 */

export class User {
  protected _name: string;
  private _email: string;
  private _active: boolean;

  constructor(name: string, email: string, active: boolean = false) {
    this._name = name;
    this._email = email;
    this._active = active;
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

  public get Number(): number {
    return 123
  }
}

// --------------------------------------

class Manager extends User {
  private _level: number

  constructor(name: string, email: string, active: boolean, level: number) {
    super(name, email, active)
    this._level = level;
  }

  //Método reescrito
  public get name(): string {
    return `Manager: ${this._name}`;
  }

  public get Number(): number {
    return super.Number + 10;
  }

  public get Level(): number {
    return this._level;
  }
}

const manager1 = new Manager("Jon", "JJ@email.com", true, 3);
console.log(manager1);
console.log(manager1.Number);
console.log(manager1.Level);

class Admin extends User {
}