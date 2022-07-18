import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputUnstyled from "@mui/base/InputUnstyled";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Top from "./Top";
import Bottom from "./Bottom";
import Value_page from "./Value_page";
import Button from "@mui/material/Button";
import Test from "./Test";
import { withRouter } from "./HOC";
import { Link, navigate } from "react-router-dom";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
// import Value_page from "./Value_page";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Card_number: "",
      CVV: "",
      Date: "",
      Card_holder_name: "",
      Card_total_val: [],
      Invoice_number: "",
      Description: "",
      Amount: this.props.values.Amount,
      PhoneNo: this.props.values.PhoneNo,
      Email: this.props.values.Email,
      Device: this.props.values.device,
      Transfer: this.props.values.value,
    };
  }

  GetTotal_val = () => {
    // console.log("props",this.props.location);
    // this.props.navigate("/Test")
    // console.log("props",this.props.router.navigate);
    const user = {
      Card_number: this.state.Card_number,
      CVV: this.state.CVV,
      Date: this.state.Date,
      Card_holder_name: this.state.Card_holder_name,
      Invoice_number: this.state.Invoice_number,
      Description: this.state.Description,
      Amount: this.props.values.Amount,
      PhoneNo: this.props.values.PhoneNo,
      Email: this.props.values.Email,
      Device: this.props.values.device,
      Transfer: this.props.values.value,
    };

    if (
      this.state.Card_number == "" ||
      this.state.CVV == "" ||
      this.state.Date == "" ||
      this.state.Card_holder_name == "" ||
      this.state.Invoice_number == "" ||
      this.props.values.PhoneNo == "" ||
      this.props.values.Email == "" ||
      this.props.values.device == "" ||
      this.props.values.value == ""
    ) {
      alert("Fill all data");
    } else if (user.PhoneNo.length > 10) {
      alert("Only allow 10 numbers");
    } else {
      this.setState({
        Card_total_val: [...this.state.Card_total_val, user],
        Card_number: "",
        CVV: "",
        Date: "",
        Card_holder_name: "",
        Invoice_number: "",
        Description: "",
        Amount: "",
        PhoneNo: "",
        Email: "",
        device: "",
        Transfer: "",
      });
    }
  };

  get_t = (e) => {
    this.setState({
      Card_number: e.target.value,
    });
  };

  render() {
    // console.log("Card_number", this.state.Card_number);
    // console.log("CVV", this.state.CVV);
    // console.log("Date", this.state.Date);
    // console.log("Card_holder_name", this.state.Card_holder_name);
    // console.log("Invoice Numbe", this.state.Card_holder_name);
    // console.log("Card_holder_name", this.state.Card_holder_name);
    console.log("Card_total_val", this.state.Card_total_val);
    // console.log('props',this.props.values)
    console.log("Radio", this.props.values.value);
    // console.log('Email',this.props.values.Email)
    // console.log('PhoneNo',this.props.values.PhoneNo)

    const user = {
      Card_number: this.state.Card_number,
      CVV: this.state.CVV,
      Date: this.state.Date,
      Card_holder_name: this.state.Card_holder_name,
      Invoice_number: this.state.Invoice_number,
      Description: this.state.Description,
      Amount: this.props.values.Amount,
      PhoneNo: this.props.values.PhoneNo,
      Email: this.props.values.Email,
    };

    return (
      <Box>
        {/* <Top /> */}
        <Box
          sx={{
            width: "500px",
            marginLeft: "28%",
            marginTop: "4%",
            backgroundImage: `url(https://th.bing.com/th/id/OIP.s2uM_fPZAW4tpFDi60PtdAHaE1?pid=ImgDet&rs=1)`,
            backgroundColor: "gray",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField
              sx={{
                marginBottom: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                width: "60%",
                height: "47px",
                outline: "none",
              }}
              placeholder="Card number"
              type="number"
              value={this.state.Card_number}
              onChange={(e) => {
                this.setState({
                  Card_number: e.target.value,
                });
              }}
            />

            <TextField
              sx={{
                marginBottom: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                width: "27%",
                height: "50px",
              }}
              value={this.state.CVV}
              placeholder="CVV"
              type="number"
              onChange={(e) => {
                this.setState({
                  CVV: e.target.value,
                });
              }}
            />

            {/* <CustomInput_1 placeholder="CVV" type="number" /> */}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "20px",
            }}
          >
            {/* <img
              className="Image"
              src="https://th.bing.com/th/id/OIP.BqXi3vY3hZxU-OMpodqBFQHaDt?pid=ImgDet&rs=1"
            ></img> */}
            <DeveloperBoardIcon
              sx={{
                width: "100px",
                size: "50px",
                color: "orange",
                height: "60px",
              }}
            />
            <Box sx={{ marginLeft: "210px", marginTop: "10px" }}>
              <TextField
                sx={{
                  marginBottom: "10px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  width: "85%",
                  height: "50px",
                }}
                value={this.state.Date}
                placeholder="MM/YY/DD"
                type="date"
                onChange={(e) => {
                  this.setState({
                    Date: e.target.value,
                  });
                }}
              />
            </Box>
          </Box>
          <Box sx={{ marginRight: "170px", marginTop: "10px" }}>
            <TextField
              sx={{
                marginBottom: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                width: "89%",
                height: "50px",
              }}
              value={this.state.Card_holder_name}
              placeholder=" Cardholder name"
              type="text"
              onChange={(e) => {
                this.setState({
                  Card_holder_name: e.target.value,
                });
              }}
            />
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Invoice Number"
                placeholder="$ 0.00"
                variant="standard"
                type="number"
                value={this.state.Invoice_number}
                onChange={(e) => {
                  this.setState({
                    Invoice_number: e.target.value,
                  });
                }}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Description"
                placeholder="$ 0.00"
                variant="standard"
                value={this.state.Description}
                onChange={(e) => {
                  this.setState({
                    Description: e.target.value,
                  });
                }}
              />
            </Box>
          </Box>
          <Button onClick={this.GetTotal_val} variant="contained">
            $ {this.props.values.Amount}
          </Button>
        </Box>
        <Button
          sx={{ backgroundColor: "#B6C9F0", color: "white", margin: "10px" }}
          variant="contained"
        >
          <Link
            style={{ textDecoration: "inherit" }}
            to="/Test"
            state={this.state.Card_total_val}
          >
            <span className="link">VIEW USER DETALS</span>
          </Link>
        </Button>

        {/* <Box>
        <Button onClick={this.GetTotal_val} variant="contained">CLICK</Button>
        <Test card_details={this.state.Card_total_val}/>
        </Box> */}
      </Box>
    );
  }
}

export default withRouter(Home);
