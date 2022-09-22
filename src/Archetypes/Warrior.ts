import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';    
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  public static createdArchetypeInstances(): number {
    Warrior.instances += 1;
    return Warrior.instances;
  }
}

export default Warrior;