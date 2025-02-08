import { Pancakes } from "./blocks/Pancakes";
import { WildCrop } from "./blocks/WildCrop";
import { CropsComponentRegister } from "./customComponents/blocks/Crops";
import { PancakesComponentRegister } from "./customComponents/blocks/Pancakes";
import { PieComponentRegister } from "./customComponents/blocks/pie";
import { CookingPotRecipeRegister } from "./register/CookingPotRecipeRegister";
new CookingPotRecipeRegister();
new PancakesComponentRegister();
new CropsComponentRegister();
new WildCrop();
new Pancakes();
new PieComponentRegister();
//# sourceMappingURL=main.js.map