import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monster: SimpleFighter[];

  constructor(character: Fighter, monster: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monster = monster;
  }

  get character(): Fighter {
    return this._character;
  }

  get monster():SimpleFighter[] {
    return this._monster;
  }
}