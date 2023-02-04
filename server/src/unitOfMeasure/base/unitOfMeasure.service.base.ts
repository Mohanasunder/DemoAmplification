/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UnitOfMeasure, Material, PoItem } from "@prisma/client";

export class UnitOfMeasureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UnitOfMeasureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UnitOfMeasureFindManyArgs>
  ): Promise<number> {
    return this.prisma.unitOfMeasure.count(args);
  }

  async findMany<T extends Prisma.UnitOfMeasureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UnitOfMeasureFindManyArgs>
  ): Promise<UnitOfMeasure[]> {
    return this.prisma.unitOfMeasure.findMany(args);
  }
  async findOne<T extends Prisma.UnitOfMeasureFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UnitOfMeasureFindUniqueArgs>
  ): Promise<UnitOfMeasure | null> {
    return this.prisma.unitOfMeasure.findUnique(args);
  }
  async create<T extends Prisma.UnitOfMeasureCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UnitOfMeasureCreateArgs>
  ): Promise<UnitOfMeasure> {
    return this.prisma.unitOfMeasure.create<T>(args);
  }
  async update<T extends Prisma.UnitOfMeasureUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UnitOfMeasureUpdateArgs>
  ): Promise<UnitOfMeasure> {
    return this.prisma.unitOfMeasure.update<T>(args);
  }
  async delete<T extends Prisma.UnitOfMeasureDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UnitOfMeasureDeleteArgs>
  ): Promise<UnitOfMeasure> {
    return this.prisma.unitOfMeasure.delete(args);
  }

  async findMaterialsUoM(
    parentId: string,
    args: Prisma.MaterialFindManyArgs
  ): Promise<Material[]> {
    return this.prisma.unitOfMeasure
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .materialsUoM(args);
  }

  async getPoItem(parentId: string): Promise<PoItem | null> {
    return this.prisma.unitOfMeasure
      .findUnique({
        where: { id: parentId },
      })
      .poItem();
  }
}
