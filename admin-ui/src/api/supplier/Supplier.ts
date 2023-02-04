import { PoHeader } from "../poHeader/PoHeader";

export type Supplier = {
  createdAt: Date;
  id: string;
  supplierName: string;
  supplierNo?: Array<PoHeader>;
  updatedAt: Date;
};
