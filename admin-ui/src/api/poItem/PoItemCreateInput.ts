import { MaterialWhereUniqueInput } from "../material/MaterialWhereUniqueInput";
import { PoHeaderWhereUniqueInput } from "../poHeader/PoHeaderWhereUniqueInput";
import { UnitOfMeasureWhereUniqueInput } from "../unitOfMeasure/UnitOfMeasureWhereUniqueInput";

export type PoItemCreateInput = {
  amount?: number | null;
  currency?: string | null;
  material?: MaterialWhereUniqueInput | null;
  poHeader?: PoHeaderWhereUniqueInput | null;
  quantity?: number | null;
  unitofMeasures?: UnitOfMeasureWhereUniqueInput | null;
  unitPrice?: number | null;
};
