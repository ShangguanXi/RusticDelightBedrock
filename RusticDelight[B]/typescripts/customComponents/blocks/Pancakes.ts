import { BlockCustomComponent, BlockComponentPlayerInteractEvent, StartupEvent, system, ItemComponentTypes, ItemEnchantableComponent, PlayerBreakBlockBeforeEvent, world } from "@minecraft/server";
import { EventAPI } from "../../lib/EventAPI";
import { ItemAPI } from "../../lib/ItemAPI";

export class PancakesComponent implements BlockCustomComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }

    onPlayerInteract(args: BlockComponentPlayerInteractEvent): void {
        const block = args.block;
        const player = args.player;
        const tags = block.getTags();
        let name = "";
        let level = 0;
        let time = 0;
        const stage = block.permutation.getState("rusticdelight:food_block_stage") as number
        for (const tag of tags) {
            if (tag.includes("rusticdelight:pancakes")) {
                const effect = tag.split("-")[1]?.split(".");
                name = effect[0];
                level = Number(effect[1]);
                time = Number(effect[2]) * 20;
            }
        }
        player?.addEffect(name, time, {
            amplifier: level,
        })
        if(stage==5){
            const location = block.location
            block.dimension.runCommand(`fill ${location.x} ${location.y} ${location.z} ${location.x} ${location.y} ${location.z} air [] destroy`)
        }
        else  block.setPermutation(block.permutation.withState("rusticdelight:food_block_stage",stage+1))
    }
    @EventAPI.register(world.beforeEvents.playerBreakBlock)
    playerBreak(args: PlayerBreakBlockBeforeEvent) {
        const block = args.block
        const itemStack = args.itemStack
        if (!itemStack) return
        if (!(block.typeId.includes('pancakes')&&block.typeId.includes('rusticdelight'))) return
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
    @EventAPI.register(system.beforeEvents.startup)
    register(args: StartupEvent) {
        args.blockComponentRegistry.registerCustomComponent('rusticdelight:pancakes', new PancakesComponent());
    }


}
