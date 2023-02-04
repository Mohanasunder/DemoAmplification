import { PoItem } from "../poItem/PoItem";
import { UnitOfMeasure } from "../unitOfMeasure/UnitOfMeasure";

export type Material = {
  createdAt: Date;
  id: string;
  materialDescription: string | null;
  materialNo: string | null;
  poItems?: Array<PoItem>;
  uoMCode?: UnitOfMeasure;
  updatedAt: Date;
};
