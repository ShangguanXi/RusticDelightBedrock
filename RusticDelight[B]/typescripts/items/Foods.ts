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
       
      }
    }
  }
}