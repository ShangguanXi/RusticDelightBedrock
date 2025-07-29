var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { world, PlayerBreakBlockBeforeEvent, system, ItemStack, StartupEvent, ItemComponentTypes } from "@minecraft/server";
import { EventAPI } from "../../lib/EventAPI";
import { ItemAPI } from "../../lib/ItemAPI";
export class PiesComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(args) {
        const block = args.block;
        const player = args.player;
        if (!player)
            return;
        const location = block.location;
        const stage = block.permutation.getState("rusticdelight:food_block_stage");
        const inventory = args.player?.getComponent("inventory");
        const container = inventory?.container;
        const itemStack = container?.getItem(player.selectedSlotIndex);
        if (!container)
            return;
        if (stage != 3) {
            if ((!itemStack) || (!itemStack?.hasTag("farmersdelight:is_knife")))
                player.addEffect('speed', 30 * 20, { amplifier: 0 });
            if (itemStack?.hasTag("farmersdelight:is_knife"))
                block.dimension.spawnItem(new ItemStack(block.typeId + "_slice"), block.location);
            block.setPermutation(block.permutation.withState("rusticdelight:food_block_stage", stage + 1));
        }
        else
            block.dimension.runCommand(`fill ${location.x} ${location.y} ${location.z} ${location.x} ${location.y} ${location.z} air [] destroy`);
    }
    playerBreak(args) {
        const block = args.block;
        const itemStack = args.itemStack;
        if (!itemStack)
            return;
        if (!(block.hasTag("rusticdelight:pie")))
            return;
        const enchant = itemStack.getComponent(ItemComponentTypes.Enchantable);
        const silkTouch = enchant?.getEnchantment('silk_touch');
        if (silkTouch) {
            args.cancel = true;
            system.runTimeout(() => {
                ItemAPI.damage(args.player, args.player.selectedSlotIndex);
                block.dimension.runCommand(`fill ${block.location.x} ${block.location.y} ${block.location.z} ${block.location.x} ${block.location.y} ${block.location.z} air destroy`);
            });
        }
    }
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('rusticdelight:pie', new PiesComponent());
    }
}
__decorate([
    EventAPI.register(world.beforeEvents.playerBreakBlock),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayerBreakBlockBeforeEvent]),
    __metadata("design:returntype", void 0)
], PiesComponent.prototype, "playerBreak", null);
__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], PiesComponent.prototype, "register", null);
//# sourceMappingURL=pie.js.map