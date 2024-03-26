import { PizzaType } from './types.js';
import { Pizza } from './Pizza.js';
import { PizzaQuatroQueijos } from './PizzaQuatroQueijos.js';
import { PizzaCalabresa } from './PizzaCalabresa.js';
import { PizzaPortuguesa } from './PizzaPortuguesa.js';
import { PizzaVegetariana } from './PizzaVegetariana.js';

export class PizzaStoreFranchise {
  private name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  orderPizza(str: string): Pizza | null {
    let PizzaType: PizzaType = { name: str };
    if (PizzaType.name == 'QUATROQUEIJOS') {
      return new PizzaQuatroQueijos();
    }
    if (PizzaType.name == 'CALABRESA') {
      return new PizzaCalabresa();
    }
    if (PizzaType.name == 'PORTUGUESA') {
      return new PizzaPortuguesa();
    }
    if (PizzaType.name == 'VEGETARIANA') {
      return new PizzaVegetariana();
    }
    return null;
  }
}
