const carTypes = {
  "BENTLY" : 1,
  "ASTON_MARTIN" : 2,
  'ROLLS_ROYCE' : 3,
  'MUSTANG' : 4,
  'CAMARO' : 5
}

class CarFactory{
    constructor(type){
      var car;

      switch(type){
        case carTypes.BENTLY:
          car = new Bently();
          break;
        case carTypes.ASTON_MARTIN:
          car = new AstonMartin();
          break;
        case carTypes.ROLLS_ROYCE:
          car = new RollsRoyce();
          break;
        case carTypes.MUSTANG:
          car = new Mustang();
          break;
        case carTypes.CAMARO:
          car = new Camaro();
          break;
        default:
          car = new BaseCar();
          break;
      }

      return car;
    }
}

class Bently{
  constructor(){
    this.name = 'Bently';
  }
}

class AstonMartin{
  constructor(){
    this.name = 'Aston Martin';
  }
}

class RollsRoyce{
  constructor(){
    this.name = 'Rolls Royce';
  }
}

class Mustang{
  constructor(){
    this.name = 'Mustang';
  }
}

class Camaro{
  constructor(){
    this.name = 'Camaro';
  }
}

class BaseCar{
  constructor(){
    this.name = 'Dead Car';
  }
}



tomiiidesBently = new CarFactory(carTypes.BENTLY);

console.log(tomiiidesBently.name);
