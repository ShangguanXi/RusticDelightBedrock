var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ItemStopUseAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
export class Foods {
    food(args) {
        const itemStack = args.itemStack;
        const player = args.source;
        const useDuration = args.useDuration;
        if (itemStack && useDuration == 0) {
            switch (itemStack.typeId) {
                case "rusticdelight:cherry_blossom_cheesecake_slice":
                    player.addEffect('speed', 30 * 20, { amplifier: 0 });
                    break;
                case "rusticdelight:chocolate_coffee":
                    player.addEffect('speed', 45 * 20, { amplifier: 0 });
                    player.addEffect('haste', 45 * 20, { amplifier: 0 });
                    break;
                case "rusticdelight:coffee":
                    player.addEffect('speed', 90 * 20, { amplifier: 0 });
                    player.addEffect('haste', 90 * 20, { amplifier: 0 });
                    break;
                case "rusticdelight:dark_coffee":
                    player.addEffect('speed', 45 * 20, { amplifier: 1 });
                    player.addEffect('haste', 45 * 20, { amplifier: 1 });
                    break;
                case "rusticdelight:milk_coffee":
                    player.addEffect('speed', 60 * 20, { amplifier: 0 });
                    player.addEffect('haste', 60 * 20, { amplifier: 0 });
                    break;
                case "rusticdelight:honey_coffee":
                    player.addEffect('speed', 45 * 20, { amplifier: 0 });
                    player.addEffect('haste', 45 * 20, { amplifier: 0 });
                    break;
            }
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.itemStopUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemStopUseAfterEvent]),
    __metadata("design:returntype", void 0)
], Foods.prototype, "food", null);
//# sourceMappingURL=Foods.js.map