import React, { useState, useEffect } from "react";
import "./App.css";
import View from "./Component/View";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Button,
  TextField,
  Box,
  MenuItem,
} from "@mui/material";

const getDatafromLS = () => {
  const data = localStorage.getItem("forms");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export const App = () => {
  const [forms, setforms] = useState(getDatafromLS());
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const value = ["Male", "Female", "Transgender"];

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    let form = {
      name,
      age,
      dob,
      gender,
    };
    setforms([...forms, form]);
    setName("");
    setAge("");
    setDob("");
    setGender("");
  };
  
  const deleteForm = (age) => {
    const filteredForms = forms.filter((element, index) => {
      return element.age !== age;
    });
    setforms(filteredForms);
  };
  useEffect(() => {
    localStorage.setItem("forms", JSON.stringify(forms));
  }, [forms]);

  return (
    <div className="wrapper">
      <h1> Assignment</h1>
      <p>Add and view your form using local storage</p>
      <div className="main">
        <div className="form-container">
          <Box
          component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "60ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleAddFormSubmit}

          > <h2><em>Simple Form :</em></h2>

            <TextField
              fullWidth
              type="text"
              size="small"
              label="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <TextField
              fullWidth
              type="number"
              size="small"
              label="Age"
              onChange={(e) => setAge(e.target.value)|| ''}
              value={age}
            />
            <TextField
              fullWidth
              type="date"
              size="small"
              label="Date Of Birth"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />

            <TextField
              fullWidth
              select
              label="Gender"
              size="small"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              {value.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>

            <Button
              variant="contained"
              type="submit"
              style={{ marginLeft: "200px", marginTop: "20px" }}
            >
              ADD
            </Button>
          </Box>
        </div>

        <div className="view-container">
          {forms.length > 0 && (
            <>
              <div className="table-responsive">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Name</strong></TableCell>

                        <TableCell><strong>Age</strong></TableCell>

                        <TableCell><strong>D.O.B</strong></TableCell>

                        <TableCell><strong>Gender</strong></TableCell>

                        <TableCell><strong>Delete</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <View forms={forms} deleteForm={deleteForm} />
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              {forms.length > 1 && (
              <Button
                variant="contained"
                size="small"
                type="submit"
                onClick={() => setforms([])}
              >
                Remove All
              </Button>)}
               </>
          )}
          {forms.length < 1 && <div>No data added yet</div>}
         </div>
      </div>
      </div>
    );
};

export default App;
