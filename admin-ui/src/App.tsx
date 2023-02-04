import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PoHeaderList } from "./poHeader/PoHeaderList";
import { PoHeaderCreate } from "./poHeader/PoHeaderCreate";
import { PoHeaderEdit } from "./poHeader/PoHeaderEdit";
import { PoHeaderShow } from "./poHeader/PoHeaderShow";
import { DocumentTypeList } from "./documentType/DocumentTypeList";
import { DocumentTypeCreate } from "./documentType/DocumentTypeCreate";
import { DocumentTypeEdit } from "./documentType/DocumentTypeEdit";
import { DocumentTypeShow } from "./documentType/DocumentTypeShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { UnitOfMeasureList } from "./unitOfMeasure/UnitOfMeasureList";
import { UnitOfMeasureCreate } from "./unitOfMeasure/UnitOfMeasureCreate";
import { UnitOfMeasureEdit } from "./unitOfMeasure/UnitOfMeasureEdit";
import { UnitOfMeasureShow } from "./unitOfMeasure/UnitOfMeasureShow";
import { MaterialList } from "./material/MaterialList";
import { MaterialCreate } from "./material/MaterialCreate";
import { MaterialEdit } from "./material/MaterialEdit";
import { MaterialShow } from "./material/MaterialShow";
import { PoItemList } from "./poItem/PoItemList";
import { PoItemCreate } from "./poItem/PoItemCreate";
import { PoItemEdit } from "./poItem/PoItemEdit";
import { PoItemShow } from "./poItem/PoItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="PoHeader"
          list={PoHeaderList}
          edit={PoHeaderEdit}
          create={PoHeaderCreate}
          show={PoHeaderShow}
        />
        <Resource
          name="DocumentType"
          list={DocumentTypeList}
          edit={DocumentTypeEdit}
          create={DocumentTypeCreate}
          show={DocumentTypeShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="UnitOfMeasure"
          list={UnitOfMeasureList}
          edit={UnitOfMeasureEdit}
          create={UnitOfMeasureCreate}
          show={UnitOfMeasureShow}
        />
        <Resource
          name="Material"
          list={MaterialList}
          edit={MaterialEdit}
          create={MaterialCreate}
          show={MaterialShow}
        />
        <Resource
          name="PoItem"
          list={PoItemList}
          edit={PoItemEdit}
          create={PoItemCreate}
          show={PoItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
