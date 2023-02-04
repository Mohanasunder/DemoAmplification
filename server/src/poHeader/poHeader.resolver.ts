import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PoHeaderResolverBase } from "./base/poHeader.resolver.base";
import { PoHeader } from "./base/PoHeader";
import { PoHeaderService } from "./poHeader.service";

@graphql.Resolver(() => PoHeader)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PoHeaderResolver extends PoHeaderResolverBase {
  constructor(
    protected readonly service: PoHeaderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
