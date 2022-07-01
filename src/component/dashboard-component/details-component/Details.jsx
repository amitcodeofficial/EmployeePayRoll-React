import "./Details.css";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TableBody from "@mui/material/TableBody";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../../../Services/EmployeeService";
import Chip from '@mui/material/Chip';

const responsiveHandler = () => {
  let screenWidth = window.innerWidth;
  let searchButton = document.querySelector(".searchBtn");
  let inputField = document.querySelector(".searchBarBox");
  let inputAndBtnDiv = document.querySelector(".detailsBtn");
  let searchBar = document.querySelector(".searchBar");
  let addUserBtn = document.querySelector(".addUserBtn");
  let cardTopContainer = document.querySelector(".cardTopContainer");

  if (screenWidth <= 850) {
    searchButton.style.display = "none";
    inputField.style.display = "block";
  } else {
    searchButton.style.display = "block";
    inputField.style.display = "none";
  }

  if (screenWidth <= 520) {
    cardTopContainer.style.flexWrap = "wrap";
    inputAndBtnDiv.style.width = "68vw";
    searchBar.style.width = "40vw";
    addUserBtn.style.width = "25vw";
  } else {
    cardTopContainer.style.flexWrap = "nowrap";
    inputAndBtnDiv.style.width = "29vw";
    searchBar.style.width = "18vw";
    addUserBtn.style.width = "10vw";
  }
};

window.onload = function () {
  responsiveHandler();
};
window.onresize = function () {
  responsiveHandler();
};

const SearchFieldDisplay = () => {
  let inputFieldBox = document.querySelector(".searchBarBox");

  inputFieldBox.style.display =
    (inputFieldBox.style.getPropertyValue("display") === "") |
    (inputFieldBox.style.getPropertyValue("display") === "none")
      ? "block"
      : "none";
};

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
    this.deleteButton = this.deleteButton.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((data) => {
      this.setState({ employees: data.data.data });
      console.log(this.state.employees);
    });
  }

  deleteButton = (empId) => {
    EmployeeService.deleteEmployee(empId).then((data) => {
      this.componentDidMount();
    });
  }

  updateEmployee = (empId,empName,empProfileImg,empSalary,empStartDate,empDepartment,empNotes,empGender) => {
    let updateEmployeeData = {
      "id": empId,
      "profileImg": empProfileImg,
      "name": empName,
      "gender": empGender,
      "department": empDepartment,
      "salary": empSalary,
      "startDate": empStartDate,
      "notes": empNotes,
    }

    console.log(updateEmployeeData);
  }

  render() {
    return (
      <div className="mainContainer">
        <section className="sectionContainer">
          <Card className="cardDetails">
            <CardContent className="cardCompTag">
              <div className="cardTopContainer">
                <div>
                  <span className="font">Employee Details</span>
                </div>
                <div className="detailsBtn">
                  <div className="searchBar">
                    <Box
                      sx={{
                        maxWidth: "100%",
                      }}
                      className="searchBarBox"
                    >
                      <TextField
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                              borderRadius: "30px",
                            },
                          },
                        }}
                        fullWidth
                        className="searchField"
                        label="Search"
                        id="fullWidth"
                      />
                    </Box>
                    <Button
                      variant="contained"
                      className="searchBtn"
                      onClick={SearchFieldDisplay}
                    >
                      <SearchIcon className="searchIcon"></SearchIcon>
                    </Button>
                  </div>
                  <div>
                    <Button variant="contained" className="addUserBtn">
                      <AddIcon></AddIcon>
                      <Link to="/register/-1" style={{ textDecoration: "none" }}>
                        <span className="addFont">Add User</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="tableDiv">
            <Card className="cardTableT">
              <CardContent className="contentT">
                <TableContainer>
                  <Table className="tableContainer" aria-label="simple table">
                    <TableHead>
                      <TableRow
                        sx={{
                          "& .MuiTableCell-head": {
                            backgroundColor: "#42515f",
                          },
                        }}
                      >
                        <TableCell align="center">
                          <span className="tableFont">NAME</span>
                        </TableCell>
                        <TableCell>
                          <span className="tableFont">GENDER</span>
                        </TableCell>
                        <TableCell>
                          <span className="tableFont">DEPARTMENT</span>
                        </TableCell>
                        <TableCell>
                          <span className="tableFont">SALARY</span>
                        </TableCell>
                        <TableCell>
                          <span className="tableFont">START DATE</span>
                        </TableCell>
                        <TableCell>
                          <span className="tableFont">ACTIONS</span>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                     <TableBody>
                      {this.state.employees.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            id="tableFont"
                            component="th"
                            scope="row"
                            style={{
                              display: "flex",
                              justifyContent: "row",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Avatar alt="profileImg" src={row.profileImg} />
                            </div>
                            <div style={{ marginLeft: "15px" }}>{row.name}</div>
                          </TableCell>
                          <TableCell id="tableFont">{row.gender}</TableCell>
                          <TableCell id="tableFont">{row.department.map((dept) => {return <Chip sx={{"backgroundColor":"#E9FEA5"}} label={dept.departmentName} />})}</TableCell>
                          <TableCell id="tableFont">₹{row.salary}</TableCell>
                          <TableCell id="tableFont">{row.startDate}</TableCell>
                          <TableCell><Button sx={{color:"#658292"}} onClick={() => {this.deleteButton(row.id)}} variant="text"><DeleteForeverIcon/></Button><Link to={`/register/${row.id}`} sx={{ "textDecoration": "none" }}><Button sx={{color:"#658292"}} onClick={() => {this.updateEmployee(row.id,row.name,row.profileImg,row.salary,row.startDate,row.department,row.notes,row.gender)}} variant="text"><EditIcon/></Button></Link></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }
}
