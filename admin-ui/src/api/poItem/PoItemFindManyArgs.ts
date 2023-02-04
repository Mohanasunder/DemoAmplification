import { PoItemWhereInput } from "./PoItemWhereInput";
import { PoItemOrderByInput } from "./PoItemOrderByInput";

export type PoItemFindManyArgs = {
  where?: PoItemWhereInput;
  orderBy?: Array<PoItemOrderByInput>;
  skip?: number;
  take?: number;
};
