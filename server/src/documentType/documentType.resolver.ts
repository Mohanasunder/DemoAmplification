import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DocumentTypeResolverBase } from "./base/documentType.resolver.base";
import { DocumentType } from "./base/DocumentType";
import { DocumentTypeService } from "./documentType.service";

@graphql.Resolver(() => DocumentType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DocumentTypeResolver extends DocumentTypeResolverBase {
  constructor(
    protected readonly service: DocumentTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
