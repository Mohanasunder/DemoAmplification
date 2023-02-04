import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PoHeaderTitle } from "../poHeader/PoHeaderTitle";

export const SupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Supplier Name" source="supplierName" />
        <ReferenceArrayInput
          source="supplierNo"
          reference="PoHeader"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PoHeaderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
