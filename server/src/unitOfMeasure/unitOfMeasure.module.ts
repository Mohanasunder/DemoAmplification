import { Module } from "@nestjs/common";
import { UnitOfMeasureModuleBase } from "./base/unitOfMeasure.module.base";
import { UnitOfMeasureService } from "./unitOfMeasure.service";
import { UnitOfMeasureController } from "./unitOfMeasure.controller";
import { UnitOfMeasureResolver } from "./unitOfMeasure.resolver";

@Module({
  imports: [UnitOfMeasureModuleBase],
  controllers: [UnitOfMeasureController],
  providers: [UnitOfMeasureService, UnitOfMeasureResolver],
  exports: [UnitOfMeasureService],
})
export class UnitOfMeasureModule {}
