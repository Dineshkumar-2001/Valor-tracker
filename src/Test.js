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
import MoreVertIcon from '@mui/icons-material/MoreVert';

class Test extends Component {
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
        {this.state.Ternory ? (
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "20px" }}
          >
            <TableContainer
              sx={{
                margin: "10px",
                width: "95%",

                display: "flex",
                justifyContent: "center",
              }}
              component={Paper}
            >
              <Table aria-label="simple table" sx={{}}>
                <TableHead>
                  {this.props.router.location.state.map((row, index) => (
                    <TableRow key={index}>
                      <Box
                        sx={{
                          // marginTop:'80px',
                          backgroundColor: "#DDDDDD",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <TableCell align="center">
                          Store : {row.Card_holder_name}
                        </TableCell>
                        <TableCell align="center">
                          Device : {row.Device}
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          EPI : {row.Card_number}
                        </TableCell>
                        <TableCell align="center">
                          <img
                            className="Table_top__img"
                            src="https://purepng.com/public/uploads/large/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png"
                          />
                        </TableCell>
                        <TableCell align="center">
                          <img
                            className="Table_top__img"
                            src="https://www.thesmbguide.com/images/tsys-1024x512-20190228.png"
                          />
                        </TableCell>
                        <TableCell>
                          <MoreVertIcon/>
                        </TableCell>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          padding: "-30px",
                        }}
                      >
                        <Box>
                          <img
                            className="Table_img"
                            src="https://th.bing.com/th/id/OIP.YzgyhBauwDFBhCsQWIdM5gHaGp?pid=ImgDet&rs=1"
                          />
                        </Box>
                        <Box>
                          <TableRow key={index} sx={{ border: "none" }}>
                            <TableCell
                              sx={{ marginRight: "15px", border: "none" }}
                              align="center"
                            >
                              CVV : {row.CVV}
                            </TableCell>
                            <TableCell
                              sx={{ marginRight: "5px", border: "none" }}
                              align="center"
                            >
                              DATE : {row.Date}
                            </TableCell>
                            <TableCell
                              sx={{ marginRight: "5px", border: "none" }}
                              align="center"
                            >
                              {" "}
                              Amount : {row.Amount}
                            </TableCell>
                            <TableCell align="center" sx={{ border: "none" }}>
                              EMAIL : {row.Email}
                            </TableCell>
                          </TableRow>
                          <TableRow key={index}>
                            <TableCell
                              align="center"
                              sx={{ border: "none", marginLeft: "15px" }}
                            >
                              NAME : {row.Card_holder_name}
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{ border: "none", marginLeft: "15px" }}
                            >
                              Transfer : {row.Transfer}
                            </TableCell>
                          </TableRow>
                        </Box>
                        <Box>
                          <TableRow key={index}>
                            <TableCell
                              align="center"
                              sx={{
                                border: "none",
                              }}
                            >
                              {" "}
                              <Button
                                variant="contained"
                                sx={{
                                  variant: "standard",
                                  backgroundColor: "#2C3639",
                                  color: "white",
                                  width: "80px",
                                  border: "none",
                                }}
                              >
                                $ {row.Amount}
                              </Button>
                            </TableCell>
                          </TableRow>
                        </Box>
                      </Box>
                    </TableRow>
                  ))}
                </TableHead>
              </Table>
            </TableContainer>
          </Box>
        ) : this.state.Ternory == false ? (
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "20px" }}
          >
            <TableContainer
              sx={{
                margin: "10px",
                width: "95%",

                display: "flex",
                justifyContent: "center",
              }}
              component={Paper}
            >
              <Table aria-label="simple table" sx={{}}>
                <TableHead>
                  {this.state.Search_data.map((row, index) => (
                    <TableRow key={index}>
                      <Box
                        sx={{
                          // marginTop:'80px',
                          backgroundColor: "#DDDDDD",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <TableCell align="center">
                          Store : {row.Card_holder_name}
                        </TableCell>
                        <TableCell align="center">
                          Device : {row.Device}
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          EPI : {row.Card_number}
                        </TableCell>
                        <TableCell align="center">
                          <img
                            className="Table_top__img"
                            src="https://purepng.com/public/uploads/large/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png"
                          />
                        </TableCell>
                        <TableCell align="center">
                          <img
                            className="Table_top__img"
                            src="https://www.thesmbguide.com/images/tsys-1024x512-20190228.png"
                          />
                        </TableCell>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          padding: "-30px",
                        }}
                      >
                        <Box>
                          <img
                            className="Table_img"
                            src="https://th.bing.com/th/id/OIP.YzgyhBauwDFBhCsQWIdM5gHaGp?pid=ImgDet&rs=1"
                          />
                        </Box>
                        <Box>
                          <TableRow key={index} sx={{ border: "none" }}>
                            <TableCell
                              sx={{ marginRight: "15px", border: "none" }}
                              align="center"
                            >
                              CVV : {row.CVV}
                            </TableCell>
                            <TableCell
                              sx={{ marginRight: "5px", border: "none" }}
                              align="center"
                            >
                              DATE : {row.Date}
                            </TableCell>
                            <TableCell
                              sx={{ marginRight: "5px", border: "none" }}
                              align="center"
                            >
                              {" "}
                              Amount : {row.Amount}
                            </TableCell>
                            <TableCell align="center" sx={{ border: "none" }}>
                              EMAIL : {row.Email}
                            </TableCell>
                          </TableRow>
                          <TableRow key={index}>
                            <TableCell
                              align="center"
                              sx={{ border: "none", marginLeft: "15px" }}
                            >
                              NAME : {row.Card_holder_name}
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{ border: "none", marginLeft: "15px" }}
                            >
                              Transfer : {row.Transfer}
                            </TableCell>
                            {/* <TableCell align="center"> Amount : {row.Amount}</TableCell> */}
                          </TableRow>
                        </Box>
                        <Box>
                          <TableRow key={index}>
                            {/* <TableCell align="center">EMAIL : {row.Email}</TableCell> */}
                            {/* <TableCell align="center">DATE : {row.Date}</TableCell> */}
                            <TableCell
                              align="center"
                              sx={{
                                border: "none",
                              }}
                            >
                              {" "}
                              <Button
                                variant="contained"
                                sx={{
                                  variant: "standard",
                                  backgroundColor: "#2C3639",
                                  color: "white",
                                  width: "80px",
                                  border: "none",
                                }}
                              >
                                $ {row.Amount}
                              </Button>
                            </TableCell>
                          </TableRow>
                        </Box>
                      </Box>
                    </TableRow>
                  ))}
                </TableHead>
              </Table>
            </TableContainer>
          </Box>
        ) : (
          ""
        )}
      </Box>
    );
  }
}

export default withRouter(Test);
