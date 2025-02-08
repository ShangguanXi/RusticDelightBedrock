const cookingPotRecipes = [
    {
        "identifer": "rusticdelight:batter",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":100,
        "priority":0,
        "experience": 0.35,
        "ingredients": [
            { "tag": 'farmersdelight:is_milk' },
            { "tag": 'farmersdelight:egg' },
            { "item": 'minecraft:wheat' },
            { "item": 'minecraft:wheat' }
        ],
        "recipe_book_tab": 'misc',
        "result": { "count": 2, "item": 'rusticdelight:batter' }
    },
    {
        "identifer": "rusticdelight:bell_pepper_pasta",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "container": { "item": 'minecraft:bowl' },
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "tag": 'farmersdelight:is_pasta' },
            { "item": 'rusticdelight:bell_pepper_green' },
            { "item": 'rusticdelight:bell_pepper_yellow' },
            { "item": 'rusticdelight:bell_pepper_red' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:bell_pepper_pasta' }
    },
    {
        "identifer": "rusticdelight:bell_pepper_soup",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "container": { "item": 'minecraft:bowl' },
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "tag": 'farmersdelight:bell_pepper' },
            { "tag": 'farmersdelight:bell_pepper' },
            { "tag": 'farmersdelight:bell_pepper' },
            { "tag": 'farmersdelight:bell_pepper' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:bell_pepper_soup' }
    },
    {
        "identifer": "rusticdelight:cooking_oil",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":100,
        "experience": 0.35,
        "ingredients": [
            { "tag": 'rusticdelight:cooking_oil_ingredients' },
            { "tag": 'rusticdelight:cooking_oil_ingredients' },
            { "tag": 'rusticdelight:cooking_oil_ingredients' },
            { "tag": 'rusticdelight:cooking_oil_ingredients' },
            { "tag": 'rusticdelight:cooking_oil_ingredients' },
            { "tag": 'rusticdelight:cooking_oil_ingredients' }
        ],
        "recipe_book_tab": 'misc',
        "result": { "count": 2, "item": 'rusticdelight:cooking_oil' }
    },
    {
        "identifer": "rusticdelight:fried_calamari",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "item": 'rusticdelight:cooking_oil' },
            { "item": 'rusticdelight:batter' },
            { "tag": 'farmersdelight:raw_calamari' },
            { "tag": 'farmersdelight:is_tomato' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:fried_calamari' }
    },
    {
        "identifer": "rusticdelight:fried_chicken",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "item": 'rusticdelight:cooking_oil' },
            { "item": 'rusticdelight:batter' },
            [
                { "tag": 'farmersdelight:is_raw_chicken' },
                { "item": 'minecraft:chicken' }
            ],
            { "tag": 'farmersdelight:is_onion' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:fried_chicken' }
    },
    {
        "identifer": "rusticdelight:fried_mushrooms",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "container": { "item": 'minecraft:bowl' },
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "item": 'rusticdelight:cooking_oil' },
            { "item": 'minecraft:brown_mushroom' },
            { "item": 'minecraft:red_mushroom' },
            { "tag": 'farmersdelight:is_onion' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:fried_mushrooms' }
    },
    {
        "identifer": "rusticdelight:fruit_beignet",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":100,
        "experience": 1.0,
        "ingredients": [
            { "item": 'rusticdelight:cooking_oil' },
            { "tag": 'farmersdelight:is_dough' },
            [
                { "item": 'minecraft:sweet_berries' },
                { "item": 'minecraft:glow_berries' },
                { "tag": 'farmersdelight:berries' }
            ],
            { "item": 'minecraft:sugar' }
        ],
        "recipe_book_tab": 'misc',
        "result": { "item": 'rusticdelight:fruit_beignet' }
    },
    {
        "identifer": "rusticdelight:spring_rolls",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":100,
        "experience": 1.0,
        "ingredients": [
            { "item": 'rusticdelight:cooking_oil' },
            { "tag": 'farmersdelight:is_dough' },
            { "tag": 'farmersdelight:cabbage_roll_ingredients' },
            { "tag": 'farmersdelight:cabbage_roll_ingredients' }
        ],
        "recipe_book_tab": 'misc',
        "result": { "count": 2, "item": 'rusticdelight:spring_rolls' }
    },
    {
        "identifer": "rusticdelight:stuffed_bell_pepper_green",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "item": 'rusticdelight:bell_pepper_green' },
            { "tag": 'farmersdelight:is_rice' },
            { "tag": 'farmersdelight:cabbage_roll_ingredients' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:stuffed_bell_pepper_green' }
    },
    {
        "identifer": "rusticdelight:stuffed_bell_pepper_red",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "item": 'rusticdelight:bell_pepper_red' },
            { "tag": 'farmersdelight:is_rice' },
            { "tag": 'farmersdelight:cabbage_roll_ingredients' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:stuffed_bell_pepper_red' }
    },
    {
        "identifer": "rusticdelight:stuffed_bell_pepper_yellow",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "item": 'rusticdelight:bell_pepper_yellow' },
            { "tag": 'farmersdelight:is_rice' },
            { "tag": 'farmersdelight:cabbage_roll_ingredients' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:stuffed_bell_pepper_yellow' }
    },
    {
        "identifer": "rusticdelight:coffee",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "item": 'minecraft:potion' },
            { "tag": 'farmersdelight:coffee_beans' },
            { "tag": 'farmersdelight:coffee_beans' },
            { "tag": 'farmersdelight:coffee_beans' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:coffee' }
    },
    {
        "identifer": "rusticdelight:dark_coffee",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "item": 'minecraft:potion' },
            { "tag": 'farmersdelight:coffee_beans' },
            { "tag": 'farmersdelight:coffee_beans' },
            { "tag": 'farmersdelight:coffee_beans' },
            { "tag": 'farmersdelight:coffee_beans' },
            { "tag": 'farmersdelight:coffee_beans' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:dark_coffee' }
    },
    {
        "identifer": "rusticdelight:milk_coffee",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "item": 'farmersdelight:milk_bottle' },
            { "tag": 'farmersdelight:coffee_beans' },
            { "tag": 'farmersdelight:coffee_beans' },
            { "tag": 'farmersdelight:coffee_beans' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:milk_coffee' }
    },
    {
        "identifer": "rusticdelight:coffee_braised_beef",
        "tags": ["cooking_pot"],
        "type": 'farmersdelight:cooking',
        "time":200,
        "priority":0,
        "experience": 1.0,
        "ingredients": [
            { "item": 'minecraft:beff' },
            { "tag": 'rusticdelight:coffee_food_ingredients' },
            { "item": 'minecraft:carrot' },
            { "item": 'minecraft:potato' }
        ],
        "recipe_book_tab": 'meals',
        "result": { "item": 'rusticdelight:coffee_braised_beef' }
    }

];

export { cookingPotRecipes }