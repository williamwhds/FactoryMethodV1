import { PizzaQuatroQueijos } from './PizzaQuatroQueijos.js';
import { PizzaCalabresa } from './PizzaCalabresa.js';
import { PizzaPortuguesa } from './PizzaPortuguesa.js';
import { PizzaVegetariana } from './PizzaVegetariana.js';
export class PizzaStoreFranchise {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    getName() {
        return this.name;
    }
    orderPizza(str) {
        let PizzaType = { name: str };
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
