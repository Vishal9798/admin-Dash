import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 110 },
  { field: 'address', headerName: 'Address', width: 160 },
];

const rows = [
  { id: 1, name: 'Vishal Kumar', age: 22, address: 'Ranchi,Jharkhand' },
  { id: 2, name: 'Kichak', age: 20, address: 'Pehelwanpur' },
  { id: 3, name: 'Raju', age: 15, address: 'Dholakpur' },
  { id: 4, name: 'Sinchan', age: 10, address: 'Kasukabe,Japan' },
  
  
];

const Dashboard = () => (
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} pageSize={5} />
  </div>
);

export default Dashboard;
