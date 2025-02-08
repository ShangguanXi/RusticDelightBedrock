import { world, PlayerBreakBlockAfterEvent, PlayerBreakBlockAfterEventSignal, PlayerBreakBlockBeforeEvent, ItemComponentTypes, ItemEnchantableComponent, system } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { WildCrop } from "./WildCrop";
import { ItemAPI } from "../lib/ItemAPI";

export class Pancakes {
    @EventAPI.register(world.beforeEvents.playerBreakBlock)
    playerBreak(args: PlayerBreakBlockBeforeEvent) {
        const block = args.block
        const itemStack = args.itemStack
        if (!itemStack) return
        if (!(block.hasTag("rusticdelight:pie"))) return
        const enchant = itemStack.getComponent(ItemComponentTypes.Enchantable) as ItemEnchantableComponent;
        const silkTouch = enchant?.getEnchantment('silk_touch');

        if (silkTouch) {
            args.cancel = true
            system.runTimeout(() => {
                ItemAPI.damage(args.player, args.player.selectedSlotIndex)
                block.dimension.runCommand(`fill ${block.location.x} ${block.location.y} ${block.location.z} ${block.location.x} ${block.location.y} ${block.location.z} air destroy`)
            })
        }

    }
}