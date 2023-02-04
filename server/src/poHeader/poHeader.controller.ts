import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PoHeaderService } from "./poHeader.service";
import { PoHeaderControllerBase } from "./base/poHeader.controller.base";

@swagger.ApiTags("poHeaders")
@common.Controller("poHeaders")
export class PoHeaderController extends PoHeaderControllerBase {
  constructor(
    protected readonly service: PoHeaderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
