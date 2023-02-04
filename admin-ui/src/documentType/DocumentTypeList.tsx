import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { POHEADER_TITLE_FIELD } from "../poHeader/PoHeaderTitle";

export const DocumentTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DocumentTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
