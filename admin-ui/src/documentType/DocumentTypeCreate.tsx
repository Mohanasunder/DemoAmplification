import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PoHeaderTitle } from "../poHeader/PoHeaderTitle";

export const DocumentTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="poheader.id"
          reference="PoHeader"
          label="TypeID"
        >
          <SelectInput optionText={PoHeaderTitle} />
        </ReferenceInput>
        <TextInput label="Type Name" source="typename" />
      </SimpleForm>
    </Create>
  );
};
