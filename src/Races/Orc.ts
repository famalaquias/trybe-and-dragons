import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;    
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Orc.instances += 1;
    return Orc.instances;
  }
}

export default Orc;