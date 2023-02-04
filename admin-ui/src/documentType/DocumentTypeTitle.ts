import { DocumentType as TDocumentType } from "../api/documentType/DocumentType";

export const DOCUMENTTYPE_TITLE_FIELD = "typename";

export const DocumentTypeTitle = (record: TDocumentType): string => {
  return record.typename || String(record.id);
};
