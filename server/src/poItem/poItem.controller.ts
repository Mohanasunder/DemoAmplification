import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PoItemService } from "./poItem.service";
import { PoItemControllerBase } from "./base/poItem.controller.base";

@swagger.ApiTags("poItems")
@common.Controller("poItems")
export class PoItemController extends PoItemControllerBase {
  constructor(
    protected readonly service: PoItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
