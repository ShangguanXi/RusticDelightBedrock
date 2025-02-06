import { BlockCustomComponent, BlockComponentPlayerInteractEvent, WorldInitializeBeforeEvent, world, Dimension, Vector3, BlockComponentRandomTickEvent, EntityInventoryComponent, Container, Direction, BlockComponentTickEvent, system } from "@minecraft/server";
import { EventAPI } from "../../lib/EventAPI";
import { ItemAPI } from "../../lib/ItemAPI";
function spawnLoot(path: string, dimenion: Dimension, location: Vector3) {
    return dimenion.runCommand(`loot spawn ${location.x} ${location.y} ${location.z} loot "${path}"`)
}

class CropsComponent implements BlockCustomComponent {

    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
        this.onRandomTick = this.onRandomTick.bind(this);
    }

    onPlayerInteract(args: BlockComponentPlayerInteractEvent): void {
        const block = args.block;
        const player = args.player;
        const dimension = args.dimension
        
        const age = Number(block.permutation.getState("farmersdelight:growth"))
        const random = Math.floor(Math.random() * 101)
        if (!player) return;
        const inventoryComponent = player.getComponent(EntityInventoryComponent.componentId) as EntityInventoryComponent;
        const container: Container | undefined = inventoryComponent?.container;
        const lootTable = this.getLootTable();
        try {
            const itemId = container?.getSlot(player.selectedSlotIndex).typeId
            if (itemId == "minecraft:bone_meal" && age < 7) {
                world.playSound("item.bone_meal.use", block.location)
                if (player?.getGameMode() == "creative") {
                    block.dimension.spawnParticle("minecraft:crop_growth_emitter", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                    block.setPermutation(block.permutation.withState("farmersdelight:growth", 7))
                }
                else {
                    if (random <= 60) {
                        block.setPermutation(block.permutation.withState("farmersdelight:growth", age + 1))
                    }
                    block.dimension.spawnParticle("minecraft:crop_growth_emitter", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                    if (!container) return;
                    ItemAPI.clear(player, player?.selectedSlotIndex)
                }

            }
            if (age == 7) {
                block.setPermutation(block.permutation.withState("farmersdelight:growth", this.getHarvest()))
                spawnLoot(lootTable, dimension, { x: block.location.x, y: block.location.y, z: block.location.z })
            }
        } catch (error) {
            if (age == 7) {
                block.setPermutation(block.permutation.withState("farmersdelight:growth", this.getHarvest()))
                spawnLoot(lootTable, dimension, { x: block.location.x, y: block.location.y, z: block.location.z })
            }
        }


    }
    onRandomTick(args: BlockComponentRandomTickEvent): void {
        const block = args.block;
        const age = Number(block.permutation.getState("farmersdelight:growth"))
        if (age < 7) {
            block.setPermutation(block.permutation.withState("farmersdelight:growth", age + 1))
        }
    }
    getLootTable(): string {
        return "";

    }
    getHarvest(): number {
        return 0;

    }

}
class BellPeppersComponent extends CropsComponent {
    getLootTable(): string {
        return "rusticdelight/blocks/bell_peppers_riped";

    }
}
class CottonComponent extends CropsComponent {
    getLootTable(): string {
        return "rusticdelight/blocks/cotton_riped";

    }
}
export class CropsComponentRegister {
    @EventAPI.register(world.beforeEvents.worldInitialize)
    register(args: WorldInitializeBeforeEvent) {
        args.blockComponentRegistry.registerCustomComponent('rusticdelight:cotton', new CottonComponent());
        args.blockComponentRegistry.registerCustomComponent('rusticdelight:bell_peppers', new BellPeppersComponent());
    }

}
