import { StringFilter } from "../../util/StringFilter";
import { MaterialListRelationFilter } from "../material/MaterialListRelationFilter";
import { PoItemWhereUniqueInput } from "../poItem/PoItemWhereUniqueInput";

export type UnitOfMeasureWhereInput = {
  id?: StringFilter;
  materialsUoM?: MaterialListRelationFilter;
  poItem?: PoItemWhereUniqueInput;
  uomCode?: StringFilter;
  uoMDescription?: StringFilter;
};
