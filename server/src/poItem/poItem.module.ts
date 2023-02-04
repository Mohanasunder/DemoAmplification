import { Module } from "@nestjs/common";
import { PoItemModuleBase } from "./base/poItem.module.base";
import { PoItemService } from "./poItem.service";
import { PoItemController } from "./poItem.controller";
import { PoItemResolver } from "./poItem.resolver";

@Module({
  imports: [PoItemModuleBase],
  controllers: [PoItemController],
  providers: [PoItemService, PoItemResolver],
  exports: [PoItemService],
})
export class PoItemModule {}
