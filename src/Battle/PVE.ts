import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: SimpleFighter;
  private _environment: SimpleFighter[];

  constructor(player: SimpleFighter, environment: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._environment = environment;
  }

  public fight(): number {
    this._environment.forEach((enemy) => {
      while (this._player.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player.attack(enemy);
        enemy.attack(this._player);    
      }
    });

    return super.fight();
  }
}

export default PVE;