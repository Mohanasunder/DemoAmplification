import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PoHeaderTitle } from "../poHeader/PoHeaderTitle";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
