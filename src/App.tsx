import React from 'react';
import {ListBoxComponent} from '@syncfusion/ej2-react-dropdowns';
import {DataManager, WebApiAdaptor, Query} from '@syncfusion/ej2-data';
//import {employees} from './data';
import './App.css';

function App() {
  const divStyle = {
    margin: 100,
    width: 300
  }
  const remoteData = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/Employees",
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })
  const dataQuery = new Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount();
  return (
    <div style={divStyle}>
      <ListBoxComponent
        dataSource={remoteData}
        fields={{
          value:"EmployeeID",
          text:"FirstName"
        }}
        query={dataQuery}
      ></ListBoxComponent>
    </div>
  );
}

export default App;
