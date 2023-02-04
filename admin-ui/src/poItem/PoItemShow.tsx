import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MATERIAL_TITLE_FIELD } from "../material/MaterialTitle";
import { POHEADER_TITLE_FIELD } from "../poHeader/PoHeaderTitle";
import { UNITOFMEASURE_TITLE_FIELD } from "../unitOfMeasure/UnitOfMeasureTitle";

export const PoItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
