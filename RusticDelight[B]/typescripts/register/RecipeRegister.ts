import {WorldLoadAfterEvent, system, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { cookingPotRecipes } from "../data/CookingPotRecipes";
import { list } from "../data/CuttingRecipes";
let register = true
export class RecipeRegister {
    @EventAPI.register(world.afterEvents.worldLoad)
    register(args: WorldLoadAfterEvent) {
        system.runInterval(() => {
            if (register) {
                for (let i = 0; i < cookingPotRecipes.length; i++) {
                    cookingPotRecipes[i]
                    const recipe = JSON.stringify(cookingPotRecipes[i]);
                    world.getDimension("overworld").runCommand(`scriptevent farmersdelight:cooking_pot_recipe ${recipe}`);
                }
                for (let i = 0; i < list.length; i++) {
                    world.getDimension("overworld").runCommand(`scriptevent farmersdelight:cutting_board_recipe ${list[i]}`);
                }
                register = false
               
            }
        })
    }
}