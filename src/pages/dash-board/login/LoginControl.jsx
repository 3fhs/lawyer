import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const LoginControl = () => {
  const rows = [
    { id: 1, الايميل: 'Description 1', الباسورد: 10101010101010 },
    { id: 2, الايميل: 'Description 2', الباسورد: 10101010101010 },
    { id: 3, الايميل: 'Description 3', الباسورد: 10101010101010 },
    { id: 4, الايميل: 'Description 4', الباسورد: 10101010101010 },
    { id: 5, الايميل: 'Description 5', الباسورد: 10101010101010 },
    { id: 6, الايميل: 'Description 6', الباسورد: 10101010101010 },
    { id: 7, الايميل: 'Description 7', الباسورد: 10101010101010 },
    // Add more rows as needed
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow sx={{borderBottom:'2px solid #777'}}>
            <TableCell sx={{textAlign:'center'}}>ID</TableCell>
            <TableCell sx={{textAlign:'center'}}>Description</TableCell>
            <TableCell sx={{textAlign:'center'}}>Passwoard</TableCell>
            <TableCell sx={{textAlign:'center'}}>Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{textAlign:'center'}}>{row.id}</TableCell>
              <TableCell sx={{textAlign:'center'}}>{row.الايميل}</TableCell>
              <TableCell sx={{textAlign:'center'}}>{row.الباسورد}</TableCell>
              <TableCell sx={{textAlign:'center'}}><DeleteIcon sx={{color:'red', cursor:'pointer'}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default LoginControl;
