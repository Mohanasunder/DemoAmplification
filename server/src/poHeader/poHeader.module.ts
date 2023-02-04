import { Module } from "@nestjs/common";
import { PoHeaderModuleBase } from "./base/poHeader.module.base";
import { PoHeaderService } from "./poHeader.service";
import { PoHeaderController } from "./poHeader.controller";
import { PoHeaderResolver } from "./poHeader.resolver";

@Module({
  imports: [PoHeaderModuleBase],
  controllers: [PoHeaderController],
  providers: [PoHeaderService, PoHeaderResolver],
  exports: [PoHeaderService],
})
export class PoHeaderModule {}
