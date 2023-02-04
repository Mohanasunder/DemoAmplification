import { PoItemCreateNestedManyWithoutMaterialsInput } from "./PoItemCreateNestedManyWithoutMaterialsInput";
import { UnitOfMeasureWhereUniqueInput } from "../unitOfMeasure/UnitOfMeasureWhereUniqueInput";

export type MaterialCreateInput = {
  materialDescription?: string | null;
  materialNo?: string | null;
  poItems?: PoItemCreateNestedManyWithoutMaterialsInput;
  uoMCode: UnitOfMeasureWhereUniqueInput;
};
