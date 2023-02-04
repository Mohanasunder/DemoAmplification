import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DOCUMENTTYPE_TITLE_FIELD } from "../documentType/DocumentTypeTitle";
import { SUPPLIER_TITLE_FIELD } from "./SupplierTitle";

export const SupplierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Supplier Name" source="supplierName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PoHeader"
          target="SupplierId"
          label="POHeaders"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
