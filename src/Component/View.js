import { TableCell, TableRow, Button } from "@mui/material";
import React from "react";


const View = ({ forms, deleteForm }) => {
  return (
    <>
     {forms.map((item, index) => (
    <TableRow key={index.key}>
      <TableCell>{item.name}</TableCell> 
      <TableCell>{item.age}</TableCell>
      
      <TableCell>{item.dob}</TableCell>
      
      <TableCell>{item.gender}</TableCell>
      
      <Button variant='outlined' style={{marginTop:'5px'}}onClick={() => deleteForm(item.age)}>
        Delete
      </Button>
    </TableRow>
    ))};
    </>
  );
}
export default View;
