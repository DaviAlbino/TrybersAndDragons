import BasicFighter from './BasicFighter';

export default interface SimpleFighter extends BasicFighter {
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}