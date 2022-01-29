import { Ingredient } from "../interfaces/ingredient.interface"

export class INGREDIENTS {
  readonly static beans:      Ingredient = { id: 1, name:  'бобові' },
  readonly static soy:        Ingredient = { id: 2, name:  'соя' },
  readonly static oat:        Ingredient = { id: 3, name:  'вівснка' },
  readonly static bulgur:     Ingredient = { id: 4, name:  'булгур' },
  readonly static buckweat:   Ingredient = { id: 5, name:  'гречка' },
  readonly static rice:       Ingredient = { id: 6, name:  'рис' },
  readonly static cereals:    Ingredient = { id: 7, name:  'крупи' },
  readonly static seitan:     Ingredient = { id: 8, name:  'сейтан' },
  readonly static flour:      Ingredient = { id: 9, name:  'борошно' },
  readonly static bread:      Ingredient = { id: 10, name: 'хліб' },
  readonly static pita:       Ingredient = { id: 11, name: 'лаваш' },
  readonly static corn:       Ingredient = { id: 12, name: 'кукурудза' },
  readonly static potato:     Ingredient = { id: 13, name: 'картопля' },
  readonly static milk:       Ingredient = { id: 14, name: 'молоко' },
  readonly static kefir:      Ingredient = { id: 15, name: 'кефір' },
  readonly static yogurt:     Ingredient = { id: 16, name: 'йогурт' },
  readonly static vegetables: Ingredient = { id: 17, name: 'овочі' },
  readonly static mushrooms:  Ingredient = { id: 18, name: 'гриби' },
};
