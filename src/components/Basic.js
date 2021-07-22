import React from "react";
import MaterialTable, { Column } from "@material-table/core";
import { tableIcons } from '../Icons';

//https://material-table-core.com/demos/details-panel/basic/

const lookup = { true: "Available", false: "Unavailable" };

const columns = [
  { title: "First Name", field: "firstName" },
  { title: "Last Name", field: "lastName" },
  { title: "Birth Year", field: "birthYear", type: "numeric" },
  { title: "Availablity", field: "availability", lookup }
];

const data = [
  { firstName: "Tod", lastName: "Miles", birthYear: 1987, availability: true, details: "This is detailed panel for Tod" },
  { firstName: "Jess", lastName: "Smith", birthYear: 2000, availability: false, details: "This is detailed panel for Jess" }
];

const Basic = () => {

    return (
        <MaterialTable
            icons={tableIcons}
            columns={columns} 
            data={data}
            detailPanel={({rowData}) => {
                return (
                      <div
                        style={{
                          fontSize: 20,
                          textAlign: 'center',
                          height: 200
                        }}
                      >
                        {rowData.details}
                      </div>
                    )
            }}
        />
    )
}


export default Basic;