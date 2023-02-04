import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentTypeTitle } from "../documentType/DocumentTypeTitle";
import { PoItemTitle } from "../poItem/PoItemTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const PoHeaderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Currency" source="currency" />
        <ReferenceInput
          source="documenttype.id"
          reference="DocumentType"
          label="DocType"
        >
          <SelectInput optionText={DocumentTypeTitle} />
        </ReferenceInput>
        <DateInput label="Document Date" source="documentDate" />
        <NumberInput step={1} label="Document No" source="documentNo" />
        <ReferenceArrayInput
          source="poItems"
          reference="PoItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PoItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier No"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
