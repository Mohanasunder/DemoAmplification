import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoItemServiceBase } from "./base/poItem.service.base";

@Injectable()
export class PoItemService extends PoItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
