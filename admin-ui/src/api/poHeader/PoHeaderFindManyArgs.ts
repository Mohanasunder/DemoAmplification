import { PoHeaderWhereInput } from "./PoHeaderWhereInput";
import { PoHeaderOrderByInput } from "./PoHeaderOrderByInput";

export type PoHeaderFindManyArgs = {
  where?: PoHeaderWhereInput;
  orderBy?: Array<PoHeaderOrderByInput>;
  skip?: number;
  take?: number;
};
