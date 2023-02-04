import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MaterialTitle } from "../material/MaterialTitle";
import { PoHeaderTitle } from "../poHeader/PoHeaderTitle";
import { UnitOfMeasureTitle } from "../unitOfMeasure/UnitOfMeasureTitle";

export const PoItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Currency" source="currency" />
        <ReferenceInput
          source="material.id"
          reference="Material"
          label="Material"
        >
          <SelectInput optionText={MaterialTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="poheader.id"
          reference="PoHeader"
          label="POHeader"
        >
          <SelectInput optionText={PoHeaderTitle} />
        </ReferenceInput>
        <NumberInput label="Quantity" source="quantity" />
        <ReferenceInput
          source="unitofmeasure.id"
          reference="UnitOfMeasure"
          label="UnitofMeasures"
        >
          <SelectInput optionText={UnitOfMeasureTitle} />
        </ReferenceInput>
        <NumberInput label="UnitPrice" source="unitPrice" />
      </SimpleForm>
    </Edit>
  );
};
