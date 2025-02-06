var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WorldInitializeBeforeEvent, world, Direction, system, Player, GameMode } from "@minecraft/server";
import { EventAPI } from "../../lib/EventAPI";
import { ItemAPI } from "../../lib/ItemAPI";
// non-used
class SeedComponent {
    constructor() {
        this.onUseOn = this.onUseOn.bind(this);
    }
    static plantCrop(args, seedId, soilId, cropId) {
        const itemStack = args.itemStack;
        const block = args.block;
        const source = args.source;
        if (source instanceof Player && itemStack.typeId == seedId && args.blockFace == Direction.Up && block.typeId == soilId) {
            system.run(() => {
                const top = block.above();
                if (!top)
                    return;
                const { x, y, z } = block.location;
                block.dimension.setBlockType({ x, y: y + 1, z }, cropId);
                if (source.getGameMode() !== GameMode.creative) {
                    ItemAPI.clear(source, source.selectedSlotIndex);
                }
            });
        }
    }
    onUseOn(args) {
        SeedComponent.plantCrop(args, 'rusticdelight:cotton_seeds', 'farmersdelight:rich_soil_farmland', 'rusticdelight:cotton');
        SeedComponent.plantCrop(args, 'rusticdelight:bell_pepper_seeds', 'farmersdelight:rich_soil_farmland', 'rusticdelight:bell_pepper');
    }
}
export class SeedComponentRegister {
    register(args) {
        args.itemComponentRegistry.registerCustomComponent('rusticdelight:seed', new SeedComponent());
    }
}
__decorate([
    EventAPI.register(world.beforeEvents.worldInitialize),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorldInitializeBeforeEvent]),
    __metadata("design:returntype", void 0)
], SeedComponentRegister.prototype, "register", null);
//# sourceMappingURL=SeedComponent.js.map