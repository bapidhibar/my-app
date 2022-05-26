import { TableCell, TableRow, Button } from "@mui/material";
import React from "react";


const View = ({ forms, deleteForm }) => {
  return (
    <>
     {forms.map((form) => (
    <TableRow key={form.age}>
      <TableCell>{form.name}</TableCell> 
      <TableCell>{form.age}</TableCell>
      
      <TableCell>{form.dob}</TableCell>
      
      <TableCell>{form.gender}</TableCell>
      
      <Button variant='outlined' style={{marginTop:'5px'}}onClick={() => deleteForm(form.age)}>
        Delete
      </Button>
    </TableRow>
    ))};
    </>
  );
}
export default View;
