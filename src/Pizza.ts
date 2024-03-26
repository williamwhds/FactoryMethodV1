import { IngredientType } from './types.js';

export abstract class Pizza {
  private ingredients: IngredientType[] = [];
  constructor(ingredients: IngredientType[]) {
    this.ingredients = ingredients;
  }

  abstract prepare(): void;
  abstract bake(): void;
  abstract cut(): void;
  abstract box(): void;
}
