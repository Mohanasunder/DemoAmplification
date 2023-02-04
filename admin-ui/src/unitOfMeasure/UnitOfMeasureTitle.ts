import { UnitOfMeasure as TUnitOfMeasure } from "../api/unitOfMeasure/UnitOfMeasure";

export const UNITOFMEASURE_TITLE_FIELD = "uomCode";

export const UnitOfMeasureTitle = (record: TUnitOfMeasure): string => {
  return record.uomCode || String(record.id);
};
