import React, { Component } from "react";
import { withRouter } from "./HOC";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { width } from "@mui/system";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

class Value_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.router.location.state,
      search: "",
      Search_data: "",
      Ternory: true,
    };
  }
  Search_button = () => {
    const data = this.props.router.location.state;
    const filteredPersons = data.filter((filter_data) =>
      filter_data.Card_holder_name.includes(this.state.search)
    );
    console.log("ll", filteredPersons);
    this.setState({
      Search_data: filteredPersons,
      Ternory: false,
    });
  };
  click_1 = () => {
    this.setState({
      value: this.props.data,
    });
    console.log("state", this.state.value);
  };
  render() {
    const { value } = this.state;
    // console.log('test',this.props.data)
    // console.log('state',this.state.value)
    console.log("search", this.state.search);
    console.log("search_data", this.state.Search_data);
    // console.log("card", this.props.card_details);
    console.log("WITHROUTER", this.props.router.location.state);
    // console.log("WITHROUTER", this.props.router.location.state.Amount);
    return (
      <Box sx={{ border: "2px solid #B7CADB", margin: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{
              marginBottom: "10px",
              backgroundColor: "white",
              borderRadius: "10px",
              width: "20%",
              height: "30px",
              outline: "none",
            }}
            placeholder="Search"
            onChange={(e) => {
              this.setState({
                search: e.target.value,
              });
            }}
          />
          <Button onClick={this.Search_button} sx={{ marginTop: "15px" }}>
            Search
          </Button>
        </Box>
       
      <Box>
        {
          this.props.router.location.state.map((val)=>{
              <div>
                <h2>jkj</h2>
                <h2>{val.Amount}</h2>
              </div>
          })
        }
      </Box>
      </Box>
    );
  }
}

export default withRouter(Value_page);
