import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import Top from "./Top";
import { width } from "@mui/system";

export default class Login_page extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      password: "",
      navigate: "",
    };
  }

  SendDetails = () => {
    Axios.post("http://localhost:5001/Details", {
      Email: this.state.Email,
      password: this.state.password,
    }).then((res) => {
        console.log("resrr", res.data);
      if ( res.data.message === "success") {
        
        this.setState({
          navigate: <Navigate to="/Top"></Navigate>,
        });
      }
       else if(res.data.message !== "success"){
        alert('Wrong')
      }
      console.log("res", res.data.message);
    });
  };

  render() {
    console.log("Email", this.state.Email);
    console.log("password", this.state.password);
    return (
        <Box sx={{backgroundColor:''}}>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'120px'}}>
        <div  className="Image_1">
        <Box >
          <Box>
            <p>{this.state.navigate}</p>
            <Typography  variant="h6">LOGIN TO YOUR ACCOUNT</Typography>
          </Box>
          <Box>
            <TextField
              sx={{
                marginBottom: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                // width: "17%",
                // height: "47px",
                outline: "none",
                margin:'10px'
              }}
              placeholder="Email"
              type="Email"
              value={this.state.Card_number}
              onChange={(e) => {
                this.setState({
                  Email: e.target.value,
                });
              }}
            />
          </Box>
          <Box>
            <TextField
              sx={{
                marginBottom: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                // width: "17%",
                // height: "47px",
                outline: "none",
                margin:'10px'
              }}
              placeholder="password"
              type="password"
              value={this.state.Card_number}
              onChange={(e) => {
                this.setState({
                  password: e.target.value,
                });
              }}
            />
          </Box>
          <Box>
            <Button onClick={this.SendDetails} sx={{backgroundColor:'black',color:'white',width:'100px'}}>SIGN IN</Button>
          </Box>
        </Box>
        </div>
        <Box sx={{backgroundColor:'black',width:'20%',height:'50%',padding:'115px',marginTop:'-1px',marginLeft:'-2px'}} className="Image">
            <Box>
            <img className="" style={{width:'210px'}} src="https://prreach.com/wp-content/uploads/2020/11/Valor-Logo-300x146.png"/>
            </Box>
        </Box>
      </Box>
      </Box>
    );
  }
}
