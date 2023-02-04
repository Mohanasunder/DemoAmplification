import { Material } from "../material/Material";
import { PoHeader } from "../poHeader/PoHeader";
import { UnitOfMeasure } from "../unitOfMeasure/UnitOfMeasure";

export type PoItem = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  material?: Material | null;
  poHeader?: PoHeader | null;
  quantity: number | null;
  unitofMeasures?: UnitOfMeasure | null;
  unitPrice: number | null;
  updatedAt: Date;
};
