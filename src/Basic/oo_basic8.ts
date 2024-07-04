// Métodos e atributos estáticos
/*
 * Para acessar métodos ou atributos estáticos não é necessário criar um
 * objeto pois o método ou atributo não pertencerá ao objeto mas sim a classe criado
 * Address.MetodoStatico().
 * 
 * s atributos e métodos estáticos são úteis para funcionalidades que são compartilhadas entre todas as instâncias de uma classe ou que não dependem de instâncias específicas.
*/
export class Address {

  private _address: string = "";
  private _zipCode: string = "";
  private _numberA?: number;
  public static defaultValidation = 7500000;

  public set address(address: string) {
    if (address.length > 3) {
      throw new Error("invalid Address");
    }
    this._address = address;
  }

  public get address(): string {
    return this._address;
  }

  public set zipCode(zipCode: string) {
    if (zipCode.length > 3) {
      throw new Error("invalid zipCode");
    }
    this._zipCode = zipCode;
  }

  public get zipCode(): string {
    return this._zipCode;
  }

  public set numberA(numberA: number) {
    this._numberA = numberA
  }

  public get numberA(): number {
    return this._numberA ?? 123
  }

  public static isCepValid(zipCode: string): boolean {
    return parseInt(zipCode.replace(/\D/g, "")) > Address.defaultValidation
  }

}

console.log(Address.isCepValid("75605-987"));


/**
 * Método e atributos Abstratos
 * 
 * Use quando há um comportamento padrão compartilhado entre várias 
 * subclasses e você deseja fornecer alguma implementação comum.
 * 
 * usados para definir contratos ou esqueleto de classes que outras classes podem implementar.
 * 
 * Classes Abstratas
 * Uma classe abstrata é uma classe que não pode ser instanciada diretamente. 
 * Em vez disso, ela serve como uma base para outras classes. 
 * Você define uma classe como abstrata usando a palavra-chave abstract.
 */

abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving...");
  }
}

/**
 * Métodos Abstratos
 * Um método abstrato é um método que é declarado, mas não implementado, 
 * em uma classe abstrata. Subclasses concretas devem fornecer a implementação 
 * para os métodos abstratos. Métodos abstratos são definidos usando a 
 * palavra-chave abstract e não têm corpo.
 */

abstract class Machine {
  abstract makeSound(): void;

  power(): void {
    console.log("Energi...");
  }
}

class Car extends Machine {
  makeSound(): void {
    console.log("Vruuuuuuuuuu.");
  }
}

const car = new Car();
car.makeSound();
car.power();

/**
 * Atributos Abstratos
 * Embora o TypeScript não suporte diretamente atributos abstratos 
 * da mesma forma que métodos abstratos, você pode definir um atributo 
 * como protegido ou público em uma classe abstrata e garantir que 
 * subclasses forneçam um valor para ele. Isso é feito usando a 
 * palavra-chave protected ou public.
 */

abstract class Player {
  protected abstract _nickname: string;

  abstract speak(): void;

  public get name(): string {
    return this._nickname
  }
}

class Knight extends Player {
  protected _nickname: string = "Bob";

  speak(): void {
    console.log('Hello');
  }
}

const knight = new Knight();
console.log(knight.name);
knight.speak();

/**
 * Resumo e Considerações
 * 1. Classes Abstratas: Não podem ser instanciadas diretamente. 
 * Servem como uma base para outras classes.
 * 
 * 2. Métodos Abstratos: Declarados sem implementação em uma classe abstrata. 
 * Devem ser implementados por subclasses concretas.
 * 
 * 3. Atributos Abstratos: Não são diretamente suportados,
 * mas você pode simular o comportamento exigindo que subclasses 
 * forneçam valores para atributos protegidos ou públicos.
 */