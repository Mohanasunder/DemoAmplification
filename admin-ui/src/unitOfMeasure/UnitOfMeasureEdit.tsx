import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { MaterialTitle } from "../material/MaterialTitle";
import { PoItemTitle } from "../poItem/PoItemTitle";

export const UnitOfMeasureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="materialsUoM"
          reference="Material"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaterialTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="poitem.id" reference="PoItem" label="POItems">
          <SelectInput optionText={PoItemTitle} />
        </ReferenceInput>
        <TextInput label="Uom Code" source="uomCode" />
        <TextInput label="UoM Description" source="uoMDescription" />
      </SimpleForm>
    </Edit>
  );
};
