import { MaterialUpdateManyWithoutUnitOfMeasuresInput } from "./MaterialUpdateManyWithoutUnitOfMeasuresInput";
import { PoItemWhereUniqueInput } from "../poItem/PoItemWhereUniqueInput";

export type UnitOfMeasureUpdateInput = {
  materialsUoM?: MaterialUpdateManyWithoutUnitOfMeasuresInput;
  poItem?: PoItemWhereUniqueInput | null;
  uomCode?: string;
  uoMDescription?: string;
};
