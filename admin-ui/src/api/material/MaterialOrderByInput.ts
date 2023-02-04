import { SortOrder } from "../../util/SortOrder";

export type MaterialOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  materialDescription?: SortOrder;
  materialNo?: SortOrder;
  uoMCodeId?: SortOrder;
  updatedAt?: SortOrder;
};
