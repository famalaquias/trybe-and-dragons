import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;    
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Halfling.instances += 1;
    return Halfling.instances;
  }
}

export default Halfling;