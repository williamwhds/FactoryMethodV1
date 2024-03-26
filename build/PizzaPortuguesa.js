import { Pizza } from './Pizza.js';
export class PizzaPortuguesa extends Pizza {
    constructor() {
        const ingredients = [
            { name: 'queijo muçarela', quantity: 100 },
            { name: 'tomate', quantity: 100 },
            { name: 'ovo cozido', quantity: 50 },
            { name: 'cebola', quantity: 50 },
            { name: 'molho', quantity: 100 },
        ];
        super(ingredients);
        console.log('Ingredientes da pizza portuguesa: ');
        for (const ingredient of ingredients) {
            console.log(`${ingredient.quantity}g de ${ingredient.name}`);
        }
        this.prepare();
        this.bake();
        this.cut();
        this.box();
    }
    prepare() {
        console.log('Preparando pizza portuguesa');
    }
    bake() {
        console.log('Assando pizza portuguesa');
    }
    cut() {
        console.log('Cortando pizza portuguesa');
    }
    box() {
        console.log('Embalando pizza portuguesa');
    }
}
