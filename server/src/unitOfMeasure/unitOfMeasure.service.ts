import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UnitOfMeasureServiceBase } from "./base/unitOfMeasure.service.base";

@Injectable()
export class UnitOfMeasureService extends UnitOfMeasureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
