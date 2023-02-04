import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { POHEADER_TITLE_FIELD } from "../poHeader/PoHeaderTitle";

export const DocumentTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="TypeID"
          source="poheader.id"
          reference="PoHeader"
        >
          <TextField source={POHEADER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type Name" source="typename" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
