import { StringFilter } from "../../util/StringFilter";
import { PoHeaderListRelationFilter } from "../poHeader/PoHeaderListRelationFilter";

export type SupplierWhereInput = {
  id?: StringFilter;
  supplierName?: StringFilter;
  supplierNo?: PoHeaderListRelationFilter;
};
