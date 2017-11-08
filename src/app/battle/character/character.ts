import { Attack } from './attack';

export class Character {
  name: string;
  type: string;
  avatar: string;
  health: number;
  agility: number;
  attack: number;
  defense: number;
  attacks: Array<Attack>;
}