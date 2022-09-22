import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
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
    Mage.instances += 1;
    return Mage.instances;
  }
}

export default Mage;