export default interface BasicFighter {
  lifePoints: number;
  strength: number;
  
  attack(enemy: BasicFighter): void;
  receiveDamage(attackPoints: number): number;
}