import { Pizza } from './Pizza.js';
import { IngredientType } from './types.js';

export class PizzaCalabresa extends Pizza {
  constructor() {
    const ingredients: IngredientType[] = [
      { name: 'queijo muçarela', quantity: 100 },
      { name: 'calabresa', quantity: 100 },
      { name: 'azeitona', quantity: 50 },
      { name: 'molho', quantity: 100 },
    ];
    super(ingredients);

    console.log('Ingredientes da pizza de calabresa: ');
    for (const ingredient of ingredients) {
      console.log(`${ingredient.quantity}g de ${ingredient.name}`);
    }

    this.prepare();
    this.bake()
    this.cut();
    this.box();
  }

  prepare(): void {
    console.log('Preparando pizza de calabresa');
  }

  bake(): void {
    console.log('Assando pizza de calabresa');
  }

  cut(): void {
    console.log('Cortando pizza de calabresa');
  }

  box(): void {
    console.log('Embalando pizza de calabresa');
  }
}
