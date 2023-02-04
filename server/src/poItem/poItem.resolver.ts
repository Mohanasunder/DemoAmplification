import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PoItemResolverBase } from "./base/poItem.resolver.base";
import { PoItem } from "./base/PoItem";
import { PoItemService } from "./poItem.service";

@graphql.Resolver(() => PoItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PoItemResolver extends PoItemResolverBase {
  constructor(
    protected readonly service: PoItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
