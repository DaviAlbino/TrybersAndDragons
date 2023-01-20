import Energy from '../Energy';
import BasicFighter from './BasicFighter';
// import SimpleFighter from './SimpleFighter';

export default interface Fighter extends BasicFighter {
  defense: number;
  energy?: Energy

  special(enemy: Fighter): void
  levelUp(): void
}