import { BlockCustomComponent, BlockComponentPlayerInteractEvent, WorldInitializeBeforeEvent, world, Dimension, Vector3, BlockVolumeBase, BlockVolume, EntityInventoryComponent, Container, ItemStack } from "@minecraft/server";
import { EventAPI } from "../../lib/EventAPI";

class PiesComponent implements BlockCustomComponent {
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

}
export class PieComponentRegister {
    @EventAPI.register(world.beforeEvents.worldInitialize)
    register(args: WorldInitializeBeforeEvent) {
        args.blockComponentRegistry.registerCustomComponent('rusticdelight:pie', new PiesComponent());
    }

}
