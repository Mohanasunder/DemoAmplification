import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UnitOfMeasureResolverBase } from "./base/unitOfMeasure.resolver.base";
import { UnitOfMeasure } from "./base/UnitOfMeasure";
import { UnitOfMeasureService } from "./unitOfMeasure.service";

@graphql.Resolver(() => UnitOfMeasure)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UnitOfMeasureResolver extends UnitOfMeasureResolverBase {
  constructor(
    protected readonly service: UnitOfMeasureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
