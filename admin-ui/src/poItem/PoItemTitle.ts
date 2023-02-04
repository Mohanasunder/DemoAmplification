import { PoItem as TPoItem } from "../api/poItem/PoItem";

export const POITEM_TITLE_FIELD = "currency";

export const PoItemTitle = (record: TPoItem): string => {
  return record.currency || String(record.id);
};
