import "./Details.css";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import React, { Component } from "react";

export default class Details extends Component {
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
                <div>
                  <Button variant="contained" className="searchBtn">
                    <SearchIcon className="searchIcon"></SearchIcon>
                  </Button>
                  <Button variant="contained" className="addUserBtn">
                    <AddIcon></AddIcon><span className="addFont">Add User</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    );
  }
}
