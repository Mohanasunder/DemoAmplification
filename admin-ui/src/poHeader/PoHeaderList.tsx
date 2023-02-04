import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOCUMENTTYPE_TITLE_FIELD } from "../documentType/DocumentTypeTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const PoHeaderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"POHeaders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency" source="currency" />
        <ReferenceField
          label="DocType"
          source="documenttype.id"
          reference="DocumentType"
        >
          <TextField source={DOCUMENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Document Date" source="documentDate" />
        <TextField label="Document No" source="documentNo" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Supplier No"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
