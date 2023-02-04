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
import { POITEM_TITLE_FIELD } from "../poItem/PoItemTitle";

export const UnitOfMeasureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UnitOfMeasures"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="POItems" source="poitem.id" reference="PoItem">
          <TextField source={POITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Uom Code" source="uomCode" />
        <TextField label="UoM Description" source="uoMDescription" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
