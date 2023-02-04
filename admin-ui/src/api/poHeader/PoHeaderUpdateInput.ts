import { DocumentTypeWhereUniqueInput } from "../documentType/DocumentTypeWhereUniqueInput";
import { PoItemUpdateManyWithoutPoHeadersInput } from "./PoItemUpdateManyWithoutPoHeadersInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PoHeaderUpdateInput = {
  amount?: number;
  currency?: string | null;
  docType?: DocumentTypeWhereUniqueInput | null;
  documentDate?: Date;
  documentNo?: number;
  poItems?: PoItemUpdateManyWithoutPoHeadersInput;
  supplierNo?: SupplierWhereUniqueInput;
};
