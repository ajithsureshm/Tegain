import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function FullWidthTextField() {

    
  return (
    <Box

   
      sx={{
        width: "100%",
        maxWidth: '100%',
        paddingLeft:"9rem",
        paddingTop:"1rem",
        paddingRight:"1rem"
      }}
    >
      {/* <TextField  fullWidth label="Search" id="fullWidth" ></TextField> */}

<TextField fullWidth label="Search"
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
    </Box>
  );
}
