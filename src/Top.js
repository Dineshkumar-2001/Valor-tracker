import React, { Component } from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Test from "./Test";
import Button from "@mui/material/Button";
import Home from "./Home";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default class Top extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      device: "",
      Amount: "",
      PhoneNo: "",
      Email: "",
      Email01: [],
      Email02: [],
      data: [],
      Total_value: [],
      test: ["Dinesh"],
      open: false,
      QR: true,
      CheckBox: false,
    };
  }

  handleOpen_1 = () => {
    this.setState({
      open: true,
      QR: false,
      CheckBox:true
    });
  };

  handleClose_1 = () => {
    this.setState({
      open: false,
      QR: false,
      CheckBox:false
    });
  };

  Get_input_val = (e) => {
    const { value, name } = e.target;
    // const user = {
    //     // Amount:this.state.Amount,
    //     // PhoneNo:this.state.PhoneNo,
    //     // Email:this.state.Email
    //     [name]:value
    // }
    this.setState((prev) => ({
      data: [...prev.data, { [name]: value }],
      //   Total_value:this.state.data
    }));

    //     // this.setState({
    //     //     Total_value:[...this.state.Total_value,user]
    //     // })
    //     console.log('value',value)
    console.log("name", name);
  };

  

  click_1 = () => {
    const dataToSend = {
      Amount: this.state.Amount,
      PhoneNo: this.state.PhoneNo,
      Email: this.state.Email,
    };

    this.setState({
      data: dataToSend,
    });
    // console.log('event',event.target.value)
    // console.log('name',name)
    // const user = {
    //       Amount:this.state.Amount,
    //        PhoneNo:this.state.PhoneNo,
    //     Email:this.state.Email
    //   //     //     [name]:value
    //        }
    // this.setState({
    //     Total_value : [...this.state.Total_value,user]
    // })
    // console.log('Total_value',this.state.Total_value)

    // const user = {
    //   Email01:this.state.Email01,

    //   //   //     //     [name]:value
    //          }
    //          this.setState({
    //           Email02:[...this.state.Email02,user]
    //          })
    // console.log("Email02____", this.state.Email02);
    console.log("Email01", this.state.Email01);
    console.log("data", this.state.data);
  };

  device_name = (event) => {
    this.setState({
      device: event.target.value,
    });
    console.log("device", event.target.value);
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    console.log("radio", event.target.value);
  };
  render() {
    // console.log('Amount',this.state.Amount)
    // console.log('Phone',this.state.PhoneNo)
    // console.log('Email',this.state.Email)
    console.log("data", this.state.data);
    console.log("device", this.state.device);
    // console.log("Total_value", this.state.Total_value);
    // console.log("Email01", this.state.Email01);
    // console.log("Email02____", this.state.Email02);

    return (
      <Box sx={{ border: "2px solid #B7CADB", margin: "20px" }}>
        <Box>Good</Box>
        {/* <Typography
          id="demo-controlled-radio-buttons-group"
          level="body3"
          textTransform="uppercase"
          fontWeight="xl"
          sx={{ letterSpacing: '0.15rem' }}
          mb={2}
        >
          Gender
        </Typography> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <Box>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              defaultValue="Sale"
              name="controlled-radio-buttons-group"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "2px solid black",
                  width: "103%",
                }}
              >
                <Radio value="Sale" label="Sale" />
                SALE
                <Radio value="Authorization" label="Authorization" />
                Authorization
                <Radio value="Refund" label="Refund" />
                Refund
                <Radio value="Invoice" label="E-Invoice" />
                Invoice
                <Radio value="Case" label="Case" />
                Case
              </Box>
            </RadioGroup>
          </Box>
          <Box>
            
            <Box>
              {this.state.QR ? (
                <Box>
                  {" "}
                  <Button >
                    <Checkbox onClick={this.handleOpen_1}  checked={this.state.CheckBox} />
                    {/* <FormControlLabel control={<Checkbox  />} label="Label" /> */}
                  </Button>
                  Genarate QR{" "}
                </Box>
              ) : (
                <Box>
                  {" "}
                  <Button>
                    <Checkbox defaultChecked   checked={this.state.CheckBox}/>
                    {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
                  </Button>
                  Genarate QR{" "}
                </Box>
              )}
              {/* {this.state.QR ? "ok" : "Tk"} */}
            </Box>

            <Modal
              open={this.state.open}
              onClose={this.handleClose_1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <img
                    className="QR"
                    src="https://pngimg.com/uploads/qr_code/qr_code_PNG25.png"
                  />
                </Typography>
              </Box>
            </Modal>
          </Box>
          <Box sx={{ minWidth: 136, minHeight: "10px" }}>
            <FormControl
              fullWidth
              size="small"
              sx={{ backgroundColor: "black", color: "white" }}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{ backgroundColor: "black", color: "white" }}
              >
                Device name
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.device}
                label="Device name"
                onChange={this.device_name}
                sx={{ backgroundColor: "black", color: "white" }}
              >
                <MenuItem
                  sx={{ backgroundColor: "black", color: "white" }}
                  value={"Valor 100"}
                >
                  Valor 100
                </MenuItem>
                <MenuItem
                  sx={{ backgroundColor: "black", color: "white" }}
                  value={"Valor 120"}
                >
                  Valor 120
                </MenuItem>
                <MenuItem
                  sx={{ backgroundColor: "black", color: "white" }}
                  value={"Valor 200"}
                >
                  Valor 200
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
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
              sx={{ direction: "rtl" }}
              id="standard-basic"
              label="Amount *"
              placeholder="$ 0.00"
              variant="standard"
              type="number"
              onChange={(e) =>
                this.setState({
                  Amount: e.target.value,
                })
              }
              name="Amount"
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
              // sx={{ direction: "rtl" }}
              id="standard-basic"
              name="Phone"
              type="number"
              label="PhoneNo"
              variant="standard"
              onChange={(e) =>
                this.setState({
                  PhoneNo: e.target.value,
                })
              }
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
              // sx={{ direction: "rtl" }}
              id="standard-basic"
              name="Email"
              label="Email"
              variant="standard"
              type="email"
              onChange={(e) =>
                this.setState({
                  Email: e.target.value,
                })
              }
            />
          </Box>
        </Box>
        <Box>
          {/* <Button variant="contained" onClick={this.click_1}>Click</Button> */}
        </Box>
        <Box>
          <Home values={this.state} />
        </Box>
        {/* <Test
          testing={this.state.test}
          Top_value={this.state.data}
          data={this.state.data}
        /> */}
      </Box>
    );
  }
}
