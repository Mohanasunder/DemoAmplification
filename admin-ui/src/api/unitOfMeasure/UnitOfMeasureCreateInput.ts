import { MaterialCreateNestedManyWithoutUnitOfMeasuresInput } from "./MaterialCreateNestedManyWithoutUnitOfMeasuresInput";
import { PoItemWhereUniqueInput } from "../poItem/PoItemWhereUniqueInput";

export type UnitOfMeasureCreateInput = {
  materialsUoM?: MaterialCreateNestedManyWithoutUnitOfMeasuresInput;
  poItem?: PoItemWhereUniqueInput | null;
  uomCode: string;
  uoMDescription: string;
};
