import { StringFilter } from "../../util/StringFilter";
import { PoHeaderWhereUniqueInput } from "../poHeader/PoHeaderWhereUniqueInput";

export type DocumentTypeWhereInput = {
  id?: StringFilter;
  typeId?: PoHeaderWhereUniqueInput;
  typename?: StringFilter;
};
