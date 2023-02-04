import { SortOrder } from "../../util/SortOrder";

export type PoItemOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  materialId?: SortOrder;
  poHeaderId?: SortOrder;
  quantity?: SortOrder;
  unitofMeasuresId?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
};
