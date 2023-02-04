import { PoHeaderWhereUniqueInput } from "../poHeader/PoHeaderWhereUniqueInput";

export type DocumentTypeCreateInput = {
  typeId?: PoHeaderWhereUniqueInput | null;
  typename: string;
};
