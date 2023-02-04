import { SortOrder } from "../../util/SortOrder";

export type PoHeaderOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  docTypeId?: SortOrder;
  documentDate?: SortOrder;
  documentNo?: SortOrder;
  id?: SortOrder;
  supplierNoId?: SortOrder;
  updatedAt?: SortOrder;
};
