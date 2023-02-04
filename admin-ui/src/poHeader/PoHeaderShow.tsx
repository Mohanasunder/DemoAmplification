import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MATERIAL_TITLE_FIELD } from "../material/MaterialTitle";
import { POHEADER_TITLE_FIELD } from "./PoHeaderTitle";
import { UNITOFMEASURE_TITLE_FIELD } from "../unitOfMeasure/UnitOfMeasureTitle";
import { DOCUMENTTYPE_TITLE_FIELD } from "../documentType/DocumentTypeTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const PoHeaderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="PoItem"
          target="PoHeaderId"
          label="POItems"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency" source="currency" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Material"
              source="material.id"
              reference="Material"
            >
              <TextField source={MATERIAL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="POHeader"
              source="poheader.id"
              reference="PoHeader"
            >
              <TextField source={POHEADER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <ReferenceField
              label="UnitofMeasures"
              source="unitofmeasure.id"
              reference="UnitOfMeasure"
            >
              <TextField source={UNITOFMEASURE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="UnitPrice" source="unitPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
