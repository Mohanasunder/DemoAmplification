import { Material } from "../material/Material";
import { PoItem } from "../poItem/PoItem";

export type UnitOfMeasure = {
  createdAt: Date;
  id: string;
  materialsUoM?: Array<Material>;
  poItem?: PoItem | null;
  uomCode: string;
  uoMDescription: string;
  updatedAt: Date;
};
