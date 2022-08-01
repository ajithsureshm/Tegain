import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from "react";
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'name', headerName: 'First name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'company_name', headerName: 'CompanyName', width: 140 },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'forecast', headerName: 'forecast', width: 130 },
  { field: 'recent_activity', headerName: 'RecentActivity', width: 130 }
 
];


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {

  const [contact, setContact] = useState([])


  const fetchData = async () => {
    let user = JSON.parse(localStorage.getItem("user"));

    var token = user.data.access;

    console.log("token", token);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const {data} = await axios.get(
        "http://saaskit.tegain.com/api/contact/",
        config
      );

      // console.log("contact",data.data.results);   
      
      setContact(data.data.results)

    } catch (error) {
      console.log(error);
    }
  };

  console.log("contacts",contact);

  // rows.push((i)=>{
  //  
  // })

 useEffect(() => {
   
  fetchData();

   
 }, [])
 
  return (
    
    <div style={{ height: 600, width: '80%', marginLeft:'215px', marginTop:'60px'}}>



<Stack spacing={2} direction="row">
      <Button style={{ marginLeft:'850px',marginBottom: "13px"}} variant="contained">Add Contact</Button>
    </Stack>
      <DataGrid
        rows={contact}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
