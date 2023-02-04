import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PoItemListRelationFilter } from "../poItem/PoItemListRelationFilter";
import { UnitOfMeasureWhereUniqueInput } from "../unitOfMeasure/UnitOfMeasureWhereUniqueInput";

export type MaterialWhereInput = {
  id?: StringFilter;
  materialDescription?: StringNullableFilter;
  materialNo?: StringNullableFilter;
  poItems?: PoItemListRelationFilter;
  uoMCode?: UnitOfMeasureWhereUniqueInput;
};
