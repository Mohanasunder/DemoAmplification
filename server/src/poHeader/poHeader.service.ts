import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoHeaderServiceBase } from "./base/poHeader.service.base";

@Injectable()
export class PoHeaderService extends PoHeaderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
