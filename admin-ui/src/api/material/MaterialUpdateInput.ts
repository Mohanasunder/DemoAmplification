import { PoItemUpdateManyWithoutMaterialsInput } from "./PoItemUpdateManyWithoutMaterialsInput";
import { UnitOfMeasureWhereUniqueInput } from "../unitOfMeasure/UnitOfMeasureWhereUniqueInput";

export type MaterialUpdateInput = {
  materialDescription?: string | null;
  materialNo?: string | null;
  poItems?: PoItemUpdateManyWithoutMaterialsInput;
  uoMCode?: UnitOfMeasureWhereUniqueInput;
};
