import { PoHeader as TPoHeader } from "../api/poHeader/PoHeader";

export const POHEADER_TITLE_FIELD = "currency";

export const PoHeaderTitle = (record: TPoHeader): string => {
  return record.currency || String(record.id);
};
