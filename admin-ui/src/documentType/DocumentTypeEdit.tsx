import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PoHeaderTitle } from "../poHeader/PoHeaderTitle";

export const DocumentTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
