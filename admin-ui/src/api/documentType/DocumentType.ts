import { PoHeader } from "../poHeader/PoHeader";

export type DocumentType = {
  createdAt: Date;
  id: string;
  typeId?: PoHeader | null;
  typename: string;
  updatedAt: Date;
};
