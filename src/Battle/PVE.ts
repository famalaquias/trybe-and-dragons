// import Fighter, { SimpleFighter } from '../Fighter';
// import Battle from './Battle';

// class PVE extends Battle {
//   private _player: Fighter;
//   private _environment: SimpleFighter[] | Fighter[];

//   constructor(player: Fighter, environment: SimpleFighter[] | Fighter[]) {
//     super(player);
//     this._player = player;
//     this._environment = environment;
//   }

//   public fight(): number {
//     while (this._player.lifePoints > 0 && this._environment.lifePoints > 0) {
//       this._player.attack(this._playerTwo);
//       this._playerTwo.attack(this._playerOne);    
//     }

//     return super.fight();
//   }
// }

// export default PVE;