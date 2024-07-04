/*
  * INTERFACE
  * é um contrato então a ideia é que toda classe que implemente essa interface ele deve seguir
  * a estrutura.
  * 
  * Usada para definir tipos e contratos de forma mais flexível e reutilizável.
  * 
  * Use quando deseja definir um contrato sem impor nenhuma implementação, especialmente 
  * útil para tipos complexos e para garantir que diferentes classes sigam a mesma estrutura.
*/

interface Location {
  latitude: number,
  longitude: number,
  readonly numberLocation: number

  getLocation(): string;
}


const getLocation = (location: Location) => {
  return `${location.latitude} - ${location.longitude}`
}
// const location: Location = {
//   latitude: 12312,
//   longitude: 32121
//   // numberLocation: 123 -> erro não definido na interface
// }

// getLocation(location)

//-----------------------------

class LocationMap implements Location {
  latitude: number;
  longitude: number;
  numberLocation: number = 0;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getLocation(): string {
    return "any"
  }

}

getLocation(new LocationMap(123, 321))


export { }