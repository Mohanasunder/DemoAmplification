import { PoHeaderCreateNestedManyWithoutSuppliersInput } from "./PoHeaderCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  supplierName: string;
  supplierNo?: PoHeaderCreateNestedManyWithoutSuppliersInput;
};
