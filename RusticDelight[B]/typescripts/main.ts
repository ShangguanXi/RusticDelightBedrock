
import { Pancakes } from "./blocks/Pancakes";
import { WildCrop } from "./blocks/WildCrop";
import { CropsComponentRegister } from "./customComponents/blocks/Crops";
import { PancakesComponentRegister } from "./customComponents/blocks/Pancakes";
import { PieComponentRegister } from "./customComponents/blocks/pie";
import { Foods } from "./items/Foods";
import { CookingPotRecipeRegister } from "./register/CookingPotRecipeRegister";


new CookingPotRecipeRegister();

new PancakesComponentRegister();
new CropsComponentRegister();

new WildCrop();
new Pancakes();
new PieComponentRegister();

new Foods();