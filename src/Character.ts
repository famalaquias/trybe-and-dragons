// import Fighter from './Fighter';
// import Archetype from './Archetypes';
// import Energy from './Energy';
// import Race from './Races';
// import getRandomInt from './utils';

// abstract class Character {
//   private _race: string;
//   private _archetype: Archetype;
//   private _maxLifePoints: number;
//   private _lifePoints: number;
//   private _strength: number;
//   private _defense: number;
//   private _dexterity: number;
//   private _energy: Energy;
//   private _name: name;

//   constructor(
//     name: string,
//     race: Race,
//     archetype: Archetype,
//   ) {
//     this._name = name;
//     this._dexterity = getRandomInt(1, 10);
//     this._race = 
//   }

//   get name(): string {
//     return this._name;
//   }

//   get special(): number {
//     return this._special;
//   }

//   get cost(): number {
//     return this._cost;
//   }

//   static createdArchetypeInstances(): number {
//     throw new Error('Not implemented');
//   }

//   abstract get energyType(): EnergyType;
// }

// export default Character;