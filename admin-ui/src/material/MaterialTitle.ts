import { Material as TMaterial } from "../api/material/Material";

export const MATERIAL_TITLE_FIELD = "materialNo";

export const MaterialTitle = (record: TMaterial): string => {
  return record.materialNo || String(record.id);
};
