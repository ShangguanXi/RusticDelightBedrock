var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ItemComponentTypes, PlayerBreakBlockAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";
import { RandomAPI } from "../lib/RandomAPI";
export class WildCrop {
    static handleCropBreak(args, cropId, seedId, produceId) {
        const itemStack = args.itemStackBeforeBreak;
        if (!itemStack || itemStack.typeId !== "minecraft:shears") {
            ItemAPI.spawn(args.block, seedId);
            if (RandomAPI.probability(20)) {
                ItemAPI.spawn(args.block, produceId);
            }
            return;
        }
        const enchant = itemStack.getComponent(ItemComponentTypes.Enchantable);
        const silkTouch = enchant?.getEnchantment('silk_touch');
        if (!silkTouch) {
            ItemAPI.spawn(args.block, cropId);
        }
    }
    playerBreak(args) {
        const blockId = args.brokenBlockPermutation.type.id;
        if (blockId == "rusticdelight:wild_bell_peppers") {
            WildCrop.handleCropBreak(args, "rusticdelight:wild_bell_peppers", "rusticdelight:bell_pepper_seeds", "rusticdelight:bell_pepper_red");
        }
        if (blockId == "rusticdelight:wild_cotton") {
            WildCrop.handleCropBreak(args, "rusticdelight:wild_cotton", "rusticdelight:cotton_seeds", "rusticdelight:cotton_boll");
        }
        if (blockId == "rusticdelight:wild_coffee") {
            WildCrop.handleCropBreak(args, "rusticdelight:wild_coffee", "rusticdelight:coffee_beans", "rusticdelight:coffee_beans");
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.playerBreakBlock),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayerBreakBlockAfterEvent]),
    __metadata("design:returntype", void 0)
], WildCrop.prototype, "playerBreak", null);
//# sourceMappingURL=WildCrop.js.map