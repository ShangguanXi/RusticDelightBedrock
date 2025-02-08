import { ItemStopUseAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";

export class Foods {
  @EventAPI.register(world.afterEvents.itemStopUse)
  food(args: ItemStopUseAfterEvent) {
    const itemStack = args.itemStack;
    const player = args.source
    const useDuration = args.useDuration
    if (itemStack && useDuration == 0) {
      switch (itemStack.typeId) {
        case "rusticdelight:cherry_blossom_cheesecake_slice":
          player.addEffect('speed', 30 * 20, { amplifier: 0 });
          break;
        case "rusticdelight:chocolate_coffee":
          player.addEffect('speed', 45 * 20, { amplifier: 0 });
          player.addEffect('haste', 45 * 20, { amplifier: 0 });
          break;
        case "rusticdelight:coffee":
          player.addEffect('speed', 90 * 20, { amplifier: 0 });
          player.addEffect('haste', 90 * 20, { amplifier: 0 });
          break;
        case "rusticdelight:dark_coffee":
          player.addEffect('speed', 45 * 20, { amplifier: 1 });
          player.addEffect('haste', 45 * 20, { amplifier: 1 });
          break;
        case "rusticdelight:milk_coffee":
          player.addEffect('speed', 60 * 20, { amplifier: 0 });
          player.addEffect('haste', 60 * 20, { amplifier: 0 });
          break;
        case "rusticdelight:honey_coffee":
          player.addEffect('speed', 45 * 20, { amplifier: 0 });
          player.addEffect('haste', 45 * 20, { amplifier: 0 });
          break;
      }
    }
  }
}