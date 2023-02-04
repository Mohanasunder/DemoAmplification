import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UnitOfMeasureService } from "./unitOfMeasure.service";
import { UnitOfMeasureControllerBase } from "./base/unitOfMeasure.controller.base";

@swagger.ApiTags("unitOfMeasures")
@common.Controller("unitOfMeasures")
export class UnitOfMeasureController extends UnitOfMeasureControllerBase {
  constructor(
    protected readonly service: UnitOfMeasureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
