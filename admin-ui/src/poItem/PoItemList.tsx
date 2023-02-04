import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MATERIAL_TITLE_FIELD } from "../material/MaterialTitle";
import { POHEADER_TITLE_FIELD } from "../poHeader/PoHeaderTitle";
import { UNITOFMEASURE_TITLE_FIELD } from "../unitOfMeasure/UnitOfMeasureTitle";

export const PoItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"POItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency" source="currency" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Material"
          source="material.id"
          reference="Material"
        >
          <TextField source={MATERIAL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="POHeader"
          source="poheader.id"
          reference="PoHeader"
        >
          <TextField source={POHEADER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <ReferenceField
          label="UnitofMeasures"
          source="unitofmeasure.id"
          reference="UnitOfMeasure"
        >
          <TextField source={UNITOFMEASURE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="UnitPrice" source="unitPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
