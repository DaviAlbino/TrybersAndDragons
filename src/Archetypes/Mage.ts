import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _demage: EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._demage = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._demage;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }
}