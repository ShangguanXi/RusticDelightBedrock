import { ItemComponentTypes, ItemEnchantableComponent, PlayerBreakBlockAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";
import { RandomAPI } from "../lib/RandomAPI";
export class WildCrop {
    static handleCropBreak(args: PlayerBreakBlockAfterEvent, cropId: string, seedId: string, produceId: string) {
        const itemStack = args.itemStackBeforeBreak;
        if (!itemStack || itemStack.typeId !== "minecraft:shears") {
            ItemAPI.spawn(args.block, seedId);
            if (RandomAPI.probability(20)) {
                ItemAPI.spawn(args.block, produceId);
            }
            return;
        }

        const enchant = itemStack.getComponent(ItemComponentTypes.Enchantable) as ItemEnchantableComponent;
        const silkTouch = enchant?.getEnchantment('silk_touch');
        if (!silkTouch) {
            ItemAPI.spawn(args.block, cropId);
        }
    }

    @EventAPI.register(world.afterEvents.playerBreakBlock)
    playerBreak(args: PlayerBreakBlockAfterEvent) {
        const blockId = args.brokenBlockPermutation.type.id;
        if (blockId == "rusticdelight:wild_bell_peppers") {
            WildCrop.handleCropBreak(args, "rusticdelight:wild_bell_peppers", "rusticdelight:bell_pepper_seeds", "rusticdelight:bell_pepper_red");
        } 
        if (blockId == "rusticdelight:wild_cotton") {
            WildCrop.handleCropBreak(args, "rusticdelight:wild_cotton", "rusticdelight:cotton_seeds", "rusticdelight:cotton_boll");
        }
    }
}
