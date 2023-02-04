/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PoItemService } from "../poItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PoItemCreateInput } from "./PoItemCreateInput";
import { PoItemWhereInput } from "./PoItemWhereInput";
import { PoItemWhereUniqueInput } from "./PoItemWhereUniqueInput";
import { PoItemFindManyArgs } from "./PoItemFindManyArgs";
import { PoItemUpdateInput } from "./PoItemUpdateInput";
import { PoItem } from "./PoItem";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PoItemControllerBase {
  constructor(
    protected readonly service: PoItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PoItem",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PoItem })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: PoItemCreateInput): Promise<PoItem> {
    return await this.service.create({
      data: {
        ...data,

        material: data.material
          ? {
              connect: data.material,
            }
          : undefined,

        poHeader: data.poHeader
          ? {
              connect: data.poHeader,
            }
          : undefined,

        unitofMeasures: data.unitofMeasures
          ? {
              connect: data.unitofMeasures,
            }
          : undefined,
      },
      select: {
        amount: true,
        createdAt: true,
        currency: true,
        id: true,

        material: {
          select: {
            id: true,
          },
        },

        poHeader: {
          select: {
            id: true,
          },
        },

        quantity: true,

        unitofMeasures: {
          select: {
            id: true,
          },
        },

        unitPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PoItem",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [PoItem] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PoItemFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<PoItem[]> {
    const args = plainToClass(PoItemFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        currency: true,
        id: true,

        material: {
          select: {
            id: true,
          },
        },

        poHeader: {
          select: {
            id: true,
          },
        },

        quantity: true,

        unitofMeasures: {
          select: {
            id: true,
          },
        },

        unitPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PoItem",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PoItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PoItemWhereUniqueInput
  ): Promise<PoItem | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        currency: true,
        id: true,

        material: {
          select: {
            id: true,
          },
        },

        poHeader: {
          select: {
            id: true,
          },
        },

        quantity: true,

        unitofMeasures: {
          select: {
            id: true,
          },
        },

        unitPrice: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PoItem",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PoItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PoItemWhereUniqueInput,
    @common.Body() data: PoItemUpdateInput
  ): Promise<PoItem | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          material: data.material
            ? {
                connect: data.material,
              }
            : undefined,

          poHeader: data.poHeader
            ? {
                connect: data.poHeader,
              }
            : undefined,

          unitofMeasures: data.unitofMeasures
            ? {
                connect: data.unitofMeasures,
              }
            : undefined,
        },
        select: {
          amount: true,
          createdAt: true,
          currency: true,
          id: true,

          material: {
            select: {
              id: true,
            },
          },

          poHeader: {
            select: {
              id: true,
            },
          },

          quantity: true,

          unitofMeasures: {
            select: {
              id: true,
            },
          },

          unitPrice: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "PoItem",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PoItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PoItemWhereUniqueInput
  ): Promise<PoItem | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          currency: true,
          id: true,

          material: {
            select: {
              id: true,
            },
          },

          poHeader: {
            select: {
              id: true,
            },
          },

          quantity: true,

          unitofMeasures: {
            select: {
              id: true,
            },
          },

          unitPrice: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
