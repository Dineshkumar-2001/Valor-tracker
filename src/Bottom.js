import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class Bottom extends Component {
    constructor(){
        super();
        this.state={
            Invoice_number:'',
            Description:''
        }
    }
  render() {
    return (
        <Box>
        <Box sx={{display:'flex',justifyContent:'space-between',margin:'20px' }}>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
     <TextField
          id="standard-basic" 
          label="Invoice Number"
          placeholder="$ 0.00"
          variant="standard"
          type='number'
          onChange={(e)=>{
            this.setState({
                Invoice_number:e.target.value
            })
          }}
        />
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
     <TextField
         
          id="standard-basic" 
          label='Description'
          placeholder="$ 0.00"
          variant="standard"
          onChange={(e)=>{
            this.setState({
                Description:e.target.value
            })
          }}
        />
    </Box>
  
   
    </Box>
    <Button variant="contained">Contained</Button>
    </Box>
    )
  }
}
