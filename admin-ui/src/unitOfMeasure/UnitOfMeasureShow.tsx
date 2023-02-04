import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { UNITOFMEASURE_TITLE_FIELD } from "./UnitOfMeasureTitle";
import { POITEM_TITLE_FIELD } from "../poItem/PoItemTitle";

export const UnitOfMeasureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="POItems" source="poitem.id" reference="PoItem">
          <TextField source={POITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Uom Code" source="uomCode" />
        <TextField label="UoM Description" source="uoMDescription" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Material"
          target="UnitOfMeasureId"
          label="Materials"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField
              label="Material Description"
              source="materialDescription"
            />
            <TextField label="Material No" source="materialNo" />
            <ReferenceField
              label="UoM Code"
              source="unitofmeasure.id"
              reference="UnitOfMeasure"
            >
              <TextField source={UNITOFMEASURE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
