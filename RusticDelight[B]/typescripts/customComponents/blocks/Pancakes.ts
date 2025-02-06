import { BlockCustomComponent, BlockComponentPlayerInteractEvent, WorldInitializeBeforeEvent, world, Dimension, Vector3, BlockVolumeBase, BlockVolume } from "@minecraft/server";
import { EventAPI } from "../../lib/EventAPI";

class PancakesComponent implements BlockCustomComponent {
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

}
export class PancakesComponentRegister {
    @EventAPI.register(world.beforeEvents.worldInitialize)
    register(args: WorldInitializeBeforeEvent) {
        args.blockComponentRegistry.registerCustomComponent('rusticdelight:pancakes', new PancakesComponent());
    }

}
