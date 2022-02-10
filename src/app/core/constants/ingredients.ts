import { Ingredient } from '../interfaces/ingredient.interface';


// why do I need this?
export class INGREDIENTS {
  static readonly beans: Ingredient = { id: 1, name: 'бобові' };
  static readonly soy: Ingredient = { id: 2, name: 'соя' };
  static readonly oat: Ingredient = { id: 3, name: 'вівсянка' };
  static readonly bulgur: Ingredient = { id: 4, name: 'булгур' };
  static readonly buckweat: Ingredient = { id: 5, name: 'гречка' };
  static readonly rice: Ingredient = { id: 6, name: 'рис' };
  static readonly cereals: Ingredient = { id: 7, name: 'крупи' };
  static readonly seitan: Ingredient = { id: 8, name: 'сейтан' };
  static readonly flour: Ingredient = { id: 9, name: 'борошно' };
  static readonly bread: Ingredient = { id: 10, name: 'хліб' };
  static readonly pita: Ingredient = { id: 11, name: 'лаваш' };
  static readonly corn: Ingredient = { id: 12, name: 'кукурудза' };
  static readonly potato: Ingredient = { id: 13, name: 'картопля' };
  static readonly milk: Ingredient = { id: 14, name: 'молоко' };
  static readonly kefir: Ingredient = { id: 15, name: 'кефір' };
  static readonly yogurt: Ingredient = { id: 16, name: 'йогурт' };
  static readonly vegetables: Ingredient = { id: 17, name: 'овочі' };
  static readonly mushrooms: Ingredient = { id: 18, name: 'гриби' };
  static readonly eggs: Ingredient = { id: 19, name: 'яйця', amountAlias: 'шт' };
  static readonly cottageChees: Ingredient = { id: 20, name: 'сир 5% (зернистий)' };
  static readonly oil: Ingredient = { id: 20, name: 'олія', amountAlias: 'ложки' };
  static readonly avocado: Ingredient = { id: 21, name: 'авокадо' };
  static readonly olives: Ingredient = { id: 22, name: 'оливки' };
  static readonly mustard: Ingredient = { id: 23, name: 'гірчиця' };
  static readonly sourСream: Ingredient = { id: 24, name: 'сметана 15%' };
  static readonly butter: Ingredient = { id: 25, name: 'масло' };
  static readonly freshCheese: Ingredient = { id: 26, name: `м'які сири` };
  static readonly semiHardCheese: Ingredient = { id: 27, name: 'тверді сири' };
  static readonly fruits: Ingredient = { id: 28, name: 'фрукти та ягоди' };
  static readonly banana: Ingredient = { id: 29, name: 'банан' };
  static readonly nuts: Ingredient = { id: 30, name: 'горіхи' };
  static readonly sweets: Ingredient = { id: 31, name: 'солодке' };
  static readonly honey: Ingredient = { id: 32, name: 'мед' };
  static readonly fish: Ingredient = { id: 33, name: 'риба 5%' };
  static readonly fatFish: Ingredient = { id: 34, name: 'риба жирна (6+ %)' };
  static readonly seaFood: Ingredient = { id: 35, name: 'море-продукти' };
  static readonly macaroni: Ingredient = { id: 36, name: 'макарони' };
  static readonly crispbread: Ingredient = { id: 37, name: 'хлібці' };
  static readonly driedFruits: Ingredient = { id: 38, name: 'сухофрукти' };
}
