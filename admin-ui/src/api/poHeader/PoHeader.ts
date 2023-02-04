import { DocumentType } from "../documentType/DocumentType";
import { PoItem } from "../poItem/PoItem";
import { Supplier } from "../supplier/Supplier";

export type PoHeader = {
  amount: number;
  createdAt: Date;
  currency: string | null;
  docType?: DocumentType | null;
  documentDate: Date;
  documentNo: number;
  id: string;
  poItems?: Array<PoItem>;
  supplierNo?: Supplier;
  updatedAt: Date;
};
