import { DocumentTypeWhereUniqueInput } from "../documentType/DocumentTypeWhereUniqueInput";
import { PoItemCreateNestedManyWithoutPoHeadersInput } from "./PoItemCreateNestedManyWithoutPoHeadersInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PoHeaderCreateInput = {
  amount: number;
  currency?: string | null;
  docType?: DocumentTypeWhereUniqueInput | null;
  documentDate: Date;
  documentNo: number;
  poItems?: PoItemCreateNestedManyWithoutPoHeadersInput;
  supplierNo: SupplierWhereUniqueInput;
};
