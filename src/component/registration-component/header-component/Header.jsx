import React, { Component } from "react";
import "./Header.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import empHeader from "./empHeader.jpg";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Card className="cardContainer">
            <div className="cardContent">
              <CardContent>
                <div className="headerContainer">
                  <div className="headerImg">
                    <CardMedia component="img" image={empHeader} />
                  </div>
                  <div className="headerFCont">
                    <div>
                      <span id="titleFont">Employee</span>
                    </div>
                    <div>
                      <span id="titleFont2">PayRoll</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </header>
      </div>
    );
  }
}
