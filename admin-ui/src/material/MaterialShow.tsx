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

import { MATERIAL_TITLE_FIELD } from "./MaterialTitle";
import { POHEADER_TITLE_FIELD } from "../poHeader/PoHeaderTitle";
import { UNITOFMEASURE_TITLE_FIELD } from "../unitOfMeasure/UnitOfMeasureTitle";

export const MaterialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Material Description" source="materialDescription" />
        <TextField label="Material No" source="materialNo" />
        <ReferenceField
          label="UoM Code"
          source="unitofmeasure.id"
          reference="UnitOfMeasure"
        >
          <TextField source={UNITOFMEASURE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PoItem"
          target="MaterialId"
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
