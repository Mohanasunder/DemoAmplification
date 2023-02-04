import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PoItemTitle } from "../poItem/PoItemTitle";
import { UnitOfMeasureTitle } from "../unitOfMeasure/UnitOfMeasureTitle";

export const MaterialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="Material Description"
          multiline
          source="materialDescription"
        />
        <TextInput label="Material No" source="materialNo" />
        <ReferenceArrayInput
          source="poItems"
          reference="PoItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PoItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="unitofmeasure.id"
          reference="UnitOfMeasure"
          label="UoM Code"
        >
          <SelectInput optionText={UnitOfMeasureTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
