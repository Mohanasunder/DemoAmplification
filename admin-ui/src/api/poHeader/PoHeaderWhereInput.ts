import { FloatFilter } from "../../util/FloatFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentTypeWhereUniqueInput } from "../documentType/DocumentTypeWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { PoItemListRelationFilter } from "../poItem/PoItemListRelationFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PoHeaderWhereInput = {
  amount?: FloatFilter;
  currency?: StringNullableFilter;
  docType?: DocumentTypeWhereUniqueInput;
  documentDate?: DateTimeFilter;
  documentNo?: IntFilter;
  id?: StringFilter;
  poItems?: PoItemListRelationFilter;
  supplierNo?: SupplierWhereUniqueInput;
};
