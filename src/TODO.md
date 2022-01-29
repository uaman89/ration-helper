
phase 1:

modules 
 - Selected ingredients
 - Available ingredients
 - Ingredient Selector

Criteria:

display 2 lists:
- 1 "selected ingredients"
- 2 "availble ingredients"

selected ingredients list:
  item view  [ingredient:  weight (g)]
  item can be removed
  on remove update "availble ingredients" list

"availble ingredients" list:
  ingredients group by categories ('numbers')
  display category as a list item
  hide ingedient which are alredy picked for 'meal'
  on click category - open Ingredient Selector
  use PlannerService to keep selected ingredients (groupId, IngredientId, weight)

"Ingredient Selector":
  list of ingredients of selected category
  item view:  [ ingredient: weight (g) ]
  on click - added selected ingredient to "Selected ingredients"





meal list
--------------

Breakfast:

  dish list
  --------------

  "dish A":     
  - ingredient 1:  50g
  - ingredient 7:  25g
  - ingredient 12: 100g

  -- total weight: 175g
  (edit) (remove)

  "dish B":
  - ingredient 1
  ...

  [ add a dish ]

Dinner:
  ... 


Ingredients: 85% of ration is availble  
--------------------------------------------

(1) [ 50%] ingredient 1 (50%), ingredient 2, ingredient 3...
(2) [100%] ingredient 5 , ingredient 6, ingredient 7 (100%)...
(3) [  0%] ingredient 1 (50%), ingredient 2, ingredient 3...

-->

ingredients selector: // modal?
---------------------

--ingredient list---

 Select a number: // click to select
  - (1) [ 50%] ingredient 1  (50%), ingredient 2, ingredient 3... 
  - (2) [100%] ingredient 5 (100%), ingredient 6, ingredient 7 (100%)...
  - (3) [  0%] ingredient 8  (50%), ingredient 9, ingredient 10...

 Select ingredient: // click to select
  - ingredient 8: 150g / 300g, ( 150g in "Dish A" )
  - ingredient 9: 200g
  - ingredient 10: 400g / 600g ( 200g in "Dish B" )
  
  // after click ingredient adds to "current" dish
