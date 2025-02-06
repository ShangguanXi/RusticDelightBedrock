var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WorldInitializeBeforeEvent, world } from "@minecraft/server";
import { EventAPI } from "../../lib/EventAPI";
class PancakesComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(args) {
        const block = args.block;
        const player = args.player;
        const tags = block.getTags();
        let name = "";
        let level = 0;
        let time = 0;
        const stage = block.permutation.getState("rusticdelight:food_block_stage");
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
        });
        if (stage == 5) {
            const location = block.location;
            block.dimension.runCommand(`fill ${location.x} ${location.y} ${location.z} ${location.x} ${location.y} ${location.z} air [] destroy`);
        }
        else
            block.setPermutation(block.permutation.withState("rusticdelight:food_block_stage", stage + 1));
    }
}
export class PancakesComponentRegister {
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('rusticdelight:pancakes', new PancakesComponent());
    }
}
__decorate([
    EventAPI.register(world.beforeEvents.worldInitialize),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorldInitializeBeforeEvent]),
    __metadata("design:returntype", void 0)
], PancakesComponentRegister.prototype, "register", null);
//# sourceMappingURL=Pancakes.js.map