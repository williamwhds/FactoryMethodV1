import { Pizza } from './Pizza.js';
import { IngredientType } from './types.js';

export class PizzaVegetariana extends Pizza {
  constructor() {
    const ingredients: IngredientType[] = [
      { name: 'queijo muçarela', quantity: 100 },
      { name: 'berinjela', quantity: 200 },
      { name: 'azeitonas', quantity: 50 },
      { name: 'molho', quantity: 100 },
    ];
    super(ingredients);

    console.log('Ingredientes da pizza vegetariana: ');
    for (const ingredient of ingredients) {
      console.log(`${ingredient.quantity}g de ${ingredient.name}`);
    }

    this.prepare();
    this.bake();
    this.cut();
    this.box();
  }

  prepare(): void {
    console.log('Preparando pizza vegetariana');
  }

  bake(): void {
    console.log('Assando pizza vegetariana');
  }

  cut(): void {
    console.log('Cortando pizza vegetariana');
  }

  box(): void {
    console.log('Embalando pizza vegetariana');
  }
}
