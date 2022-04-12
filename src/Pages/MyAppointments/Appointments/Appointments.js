import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import React from 'react';

const Appointments = ({date,appointments}) => {
   
 

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          textAlign: 'center',
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
          textAlign: 'center',
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
         
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      
    return (
        <div>
            <Box container>
                <Box style={{display:'flex',justifyContent: 'space-between'}} sx={{p:2}}>
                <Typography style={{color:'#1CC7C1',fontSize:20}}>
                    Appointments
                </Typography>
                <Typography style={{color:'#8B8888',fontSize:14}}>
                    {date.toDateString()}
                </Typography>
            </Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{backgroundColor:'#8B8888'}}>
          <TableRow>
            <StyledTableCell>Service</StyledTableCell>
            <StyledTableCell>Time </StyledTableCell>
            <StyledTableCell>Patient Name</StyledTableCell>
            <StyledTableCell>Action </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.ServiceName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.timeSlot}</StyledTableCell>
              <StyledTableCell align="right">
              {row.patientName}
              </StyledTableCell>
              <StyledTableCell align="right">
               
              </StyledTableCell>
              
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>
        </div>
    );
};

export default Appointments;