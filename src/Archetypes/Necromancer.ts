import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';    
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  public static createdArchetypeInstances(): number {
    Necromancer.instances += 1;
    return Necromancer.instances;
  }
}

export default Necromancer;