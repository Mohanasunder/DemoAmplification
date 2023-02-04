import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MaterialWhereUniqueInput } from "../material/MaterialWhereUniqueInput";
import { PoHeaderWhereUniqueInput } from "../poHeader/PoHeaderWhereUniqueInput";
import { UnitOfMeasureWhereUniqueInput } from "../unitOfMeasure/UnitOfMeasureWhereUniqueInput";

export type PoItemWhereInput = {
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  material?: MaterialWhereUniqueInput;
  poHeader?: PoHeaderWhereUniqueInput;
  quantity?: FloatNullableFilter;
  unitofMeasures?: UnitOfMeasureWhereUniqueInput;
  unitPrice?: FloatNullableFilter;
};
