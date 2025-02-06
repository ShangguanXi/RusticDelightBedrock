var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WorldInitializeAfterEvent, system, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import "../data/CookingPotRecipes";
import { cookingPotRecipes } from "../data/CookingPotRecipes";
let register = true;
export class CookingPotRecipeRegister {
    register(args) {
        system.runInterval(() => {
            if (register) {
                for (let i = 0; i < cookingPotRecipes.length; i++) {
                    cookingPotRecipes[i];
                    const recipe = JSON.stringify(cookingPotRecipes[i]);
                    world.getDimension("overworld").runCommandAsync(`scriptevent farmersdelight:cooking_pot_recipe ${recipe}`);
                }
                register = false;
            }
        });
    }
}
__decorate([
    EventAPI.register(world.afterEvents.worldInitialize),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorldInitializeAfterEvent]),
    __metadata("design:returntype", void 0)
], CookingPotRecipeRegister.prototype, "register", null);
//# sourceMappingURL=CuttingRecipeRegister.js.map