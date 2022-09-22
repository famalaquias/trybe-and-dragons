import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;    
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Elf.instances += 1;
    return Elf.instances;
  }
}

export default Elf;