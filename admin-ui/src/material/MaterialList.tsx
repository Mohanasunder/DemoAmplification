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
import { UNITOFMEASURE_TITLE_FIELD } from "../unitOfMeasure/UnitOfMeasureTitle";

export const MaterialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Materials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Material Description" source="materialDescription" />
        <TextField label="Material No" source="materialNo" />
        <ReferenceField
          label="UoM Code"
          source="unitofmeasure.id"
          reference="UnitOfMeasure"
        >
          <TextField source={UNITOFMEASURE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
