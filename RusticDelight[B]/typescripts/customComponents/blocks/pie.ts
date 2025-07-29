import { BlockCustomComponent, BlockComponentPlayerInteractEvent, world, PlayerBreakBlockBeforeEvent, system, BlockVolumeBase, BlockVolume, EntityInventoryComponent, Container, ItemStack, StartupEvent, ItemEnchantableComponent, ItemComponentTypes } from "@minecraft/server";
import { EventAPI } from "../../lib/EventAPI";
import { ItemAPI } from "../../lib/ItemAPI";

export class PiesComponent implements BlockCustomComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }

    onPlayerInteract(args: BlockComponentPlayerInteractEvent): void {
        const block = args.block;
        const player = args.player;
        if (!player) return
        const location = block.location
        const stage = block.permutation.getState("rusticdelight:food_block_stage") as number
        const inventory = args.player?.getComponent("inventory") as EntityInventoryComponent;
        const container: Container | undefined = inventory?.container
        const itemStack = container?.getItem(player.selectedSlotIndex)
        if (!container) return;
        if (stage != 3) {
            if ((!itemStack)||(!itemStack?.hasTag("farmersdelight:is_knife"))) player.addEffect('speed', 30 * 20, { amplifier: 0 });
            if (itemStack?.hasTag("farmersdelight:is_knife")) block.dimension.spawnItem(new ItemStack(block.typeId+"_slice"),block.location)
            block.setPermutation(block.permutation.withState("rusticdelight:food_block_stage", stage + 1))     
        }
        else block.dimension.runCommand(`fill ${location.x} ${location.y} ${location.z} ${location.x} ${location.y} ${location.z} air [] destroy`)
    }
    @EventAPI.register(world.beforeEvents.playerBreakBlock)
    playerBreak(args: PlayerBreakBlockBeforeEvent) {
        const block = args.block
        const itemStack = args.itemStack
        if (!itemStack) return
        if (!(block.hasTag("rusticdelight:pie"))) return
        const enchant = itemStack.getComponent(ItemComponentTypes.Enchantable)
        const silkTouch = enchant?.getEnchantment('silk_touch');

        if (silkTouch) {
            args.cancel = true
            system.runTimeout(() => {
                ItemAPI.damage(args.player, args.player.selectedSlotIndex)
                block.dimension.runCommand(`fill ${block.location.x} ${block.location.y} ${block.location.z} ${block.location.x} ${block.location.y} ${block.location.z} air destroy`)
            })
        }

    }
    @EventAPI.register(system.beforeEvents.startup)
    register(args: StartupEvent) {
        args.blockComponentRegistry.registerCustomComponent('rusticdelight:pie', new PiesComponent());
    }


}
