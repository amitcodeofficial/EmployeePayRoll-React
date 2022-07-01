import React, { Component } from "react";
import "./Form.css";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Avatar from "@mui/material/Avatar";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import EmployeeService from "../../../Services/EmployeeService";

class Form extends Component {
  
  constructor(props){
    super(props);
    this.state={
        name:'',
        profileImg:'',
        department:[],
        gender:'',
        salary:'',
        startDate:'',
        notes:'',
    }

    this.nameEvent = this.nameEvent.bind(this);
    this.profileImgEvent = this.profileImgEvent.bind(this);
    this.genderEvent = this.genderEvent.bind(this);
    this.salaryEvent = this.salaryEvent.bind(this);
    this.dateEvent = this.dateEvent.bind(this);
    this.notesEvent = this.notesEvent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;

    if(id == -1){
      console.log("hi");
    }else{
      EmployeeService.getEmployeeById(id).then((data) => {
        let EmployeeUpdate = data.data.data;
        this.setState({ name: EmployeeUpdate.name });
        this.setState({profileImg: EmployeeUpdate.profileImg });
        this.setState({ gender: EmployeeUpdate.gender });
        this.setState({ salary: EmployeeUpdate.salary });
        this.setState({ startDate: EmployeeUpdate.startDate });
        this.setState({ notes: EmployeeUpdate.notes });
        // this.setState({ department: this.state.department.concat({ departmentName: EmployeeUpdate.department.map((dept) => {return dept.departmentName;}) })});
      });
    }
  }

  nameEvent = (event) => {
    this.setState({ name: event.target.value });
  }

  profileImgEvent = (event) => {
    this.setState({profileImg: event.target.value });
  }

  genderEvent = (event) => {
    this.setState({ gender: event.target.value });
  }

  salaryEvent = (event) => {
    this.setState({ salary: event.target.value });
  }

  dateEvent = (event) => {
    this.setState({ startDate: event.target.value });
  }

  notesEvent = (event) => {
    this.setState({ notes: event.target.value });
  }

  departmentEvent = (event) => {
    this.setState({ department: this.state.department.concat({ departmentName: event.target.value })});
  }

  onSubmit = () => {
    const { id } = this.props.match.params;

    if(id == -1){
      let Employee = {
        "profileImg": this.state.profileImg,
        "name": this.state.name,
        "gender": this.state.gender,
        "department": this.state.department,
        "salary": this.state.salary,
        "startDate": this.state.startDate,
        "notes": this.state.notes,
      }

      EmployeeService.addEmployee(Employee).then((data) => {console.log(data);});

    }else{

      let EmployeeU = {
        "id": this.props.match.params.id,
        "profileImg": this.state.profileImg,
        "name": this.state.name,
        "gender": this.state.gender,
        "department": this.state.department,
        "salary": this.state.salary,
        "startDate": this.state.startDate,
        "notes": this.state.notes,
      }
      console.log(EmployeeU);
      EmployeeService.updateEmployee(EmployeeU).then((data) => {console.log(data);});

    }
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="formComponentDiv">
        <Card className="formCard">
          <Card className="formCardInternal" sx={{ boxShadow: "0" }}>
            <FormControl className="formControl">
              <div className="formHead">
                <span>Employee PayRoll Form</span>
              </div>
              <div className="nameDiv">
                <div>
                  <span className="formFont">Name</span>
                </div>
                <div>
                  <Box
                    sx={{
                      minWidth: "39vw",
                      width: "100%",
                    }}
                  >
                    <TextField fullWidth name="name" value={this.state.name} onChange={this.nameEvent} label="" id="fullWidth" />
                  </Box>
                </div>
              </div>
              <div className="profileImgDiv formFont">
                <div>
                  <span>Profile Image</span>
                </div>
                <div className="profileRadioBtns">
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue="/flower.jpg"
                    value={this.state.profileImg}
                    name="radio-buttons-group"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="/flower.jpg"
                      onChange={this.profileImgEvent}
                      control={<Radio />}
                      label={<Avatar alt="profileImg" src="/flower.jpg" />}
                    />
                    <FormControlLabel
                      value="/flower2.jpg"
                      onChange={this.profileImgEvent}
                      control={<Radio />}
                      label={<Avatar alt="profileImg" src="/flower2.jpg" />}
                    />
                    <FormControlLabel
                      value="/flower3.jpg"
                      onChange={this.profileImgEvent}
                      control={<Radio />}
                      label={<Avatar alt="profileImg" src="/flower3.jpg" />}
                    />
                    <FormControlLabel
                      value="/flower4.jpg"
                      onChange={this.profileImgEvent}
                      control={<Radio />}
                      label={<Avatar alt="profileImg" src="/flower4.jpg" />}
                    />
                  </RadioGroup>
                </div>
              </div>
              <div className="genderDiv formFont">
                <div>
                  <span>Gender</span>
                </div>
                <div>
                  <RadioGroup
                    row
                    value={this.state.gender}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Male"
                      onChange={this.genderEvent}
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      onChange={this.genderEvent}
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </div>
              </div>
              <div className="departmentDiv formFont">
                <div>
                  <span>Department</span>
                </div>
                <div>
                  <FormGroup
                    sx={{ display: "flex", flexDirection: "row" }}
                    className="formFont"
                  >
                    <FormControlLabel value="HR" onChange={this.departmentEvent} control={<Checkbox />} label="HR" />
                    <FormControlLabel value="Sales" onChange={this.departmentEvent} control={<Checkbox />} label="Sales" />
                    <FormControlLabel value="Finance" onChange={this.departmentEvent} control={<Checkbox />} label="Finance" />
                    <FormControlLabel
                    value="Engineer"
                    onChange={this.departmentEvent}
                      control={<Checkbox />}
                      label="Engineer"
                    />
                    <FormControlLabel value="Others" onChange={this.departmentEvent} control={<Checkbox />} label="Others" />
                  </FormGroup>
                </div>
              </div>
              <div className="salaryDiv formFont">
                <div>
                  <span>Salary</span>
                </div>
                <div>
                  <Box width={400}>
                    <Slider
                      // defaultValue={10000}
                      min={0}
                      max={50000}
                      value={this.state.salary}
                      onChange={this.salaryEvent}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      sx={{ color: "red" }}
                    />
                  </Box>
                </div>
              </div>
              <div className="selectDateDiv formFont">
                <div>
                  <span>Select Date</span>
                </div>
                <div className="dateInputDiv">
                  <TextField
                    id="date"
                    label="Select Date"
                    type="date"
                    value={this.state.startDate}
                    // defaultValue="2022-06-23"
                    onChange={this.dateEvent}
                    sx={{ width: "100%" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              </div>
              <div className="notesDiv formFont">
                <div>
                  <span>Notes</span>
                </div>
                <div>
                  <TextareaAutosize
                    maxRows={7}
                    value={this.state.notes}
                    aria-label="maximum height"
                    placeholder="Write Your Notes Here"
                    onChange={this.notesEvent}
                    style={{ height: "104px" }}
                    className="textAreaField formFont"
                  />
                </div>
              </div>
              <div className="buttonsContainer">
                <div className="buttonsDiv">
                  <div>
                    <Link to="/" style={{"textDecoration":"none"}}>
                      <Button className="btn" variant="contained">
                        Cancel
                      </Button>
                    </Link>
                  </div>
                  <div className="buttonsSR">
                    <div>
                      <Button onClick={this.onSubmit} className="btn" variant="contained">
                        <span>Submit</span>
                      </Button>
                    </div>
                    <div>
                      <Button className="btn" variant="contained">
                        Reset
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FormControl>
          </Card>
        </Card>
      </div>
    );
  }
}


export default withRouter(Form);