import { Pizza } from './Pizza.js';
import { IngredientType } from './types.js';

export class PizzaQuatroQueijos extends Pizza {
  constructor() {
    const ingredients: IngredientType[] = [
      { name: 'queijo muçarela', quantity: 50 },
      { name: 'queijo gorgonzola', quantity: 50 },
      { name: 'queijo provolone', quantity: 50 },
      { name: 'queijo parmesão', quantity: 50 },
      { name: 'molho', quantity: 100 },
    ];
    super(ingredients);

    console.log('Ingredientes da pizza quatro queijos: ');
    for (const ingredient of ingredients) {
      console.log(`${ingredient.quantity}g de ${ingredient.name}`);
    }

    this.prepare();
    this.bake()
    this.cut();
    this.box();
  }

  prepare(): void {
    console.log('Preparando pizza quatro queijos');
  }

  bake(): void {
    console.log('Assando pizza quatro queijos');
  }

  cut(): void {
    console.log('Cortando pizza quatro queijos');
  }

  box(): void {
    console.log('Embalando pizza quatro queijos');
  }
}
