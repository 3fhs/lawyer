import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { teamApi } from '../../../redux/apiCalls/TeamApiCall';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const columns = [
  { id: 'name', label: 'الاسم', minWidth: 170, align: 'center' },
  { id: 'work', label: 'المهنة', minWidth: 100, align: 'center' },
  { id: 'deg', label: 'درجة القيد', minWidth: 170, align: 'center' },
  { id: 'image', label: 'صورة', minWidth: 170, align: 'center' },
  { id: 'settings', label: 'اعدادات', minWidth: 170, align: 'center' },
];

function Team() {
  const dispatch = useDispatch();
  const { team } = useSelector(state => state.team); // استخراج بيانات العاملين

  console.log(team);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    dispatch(teamApi()); // استدعاء API لجلب بيانات العاملين
  }, [dispatch]);

  return (
    <div className='profile'>
      <div style={{display:'flex', alignItems:'center',justifyContent:'center', gap:'10px', width:'100%', flexDirection:'row-reverse'}}>
        <h1> بيانات العاملين بالمكتب </h1>
        <AddIcon sx={{color:"#1f9fff", cursor:"pointer"}}/>
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {team
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'image' ? (
                              <img src={value} alt={row.name} width={50} style={{position:'relative', transform:'translatex(-50%)', right:'-50%', height:'50px', borderRadius:'50%', objectFit:'cover'}}/>
                            ) : column.id === 'settings' ? (
                              <>
                                <IconButton color="primary" aria-label="edit">
                                  <EditIcon />
                                </IconButton>
                                <IconButton color="secondary" aria-label="delete">
                                  <DeleteIcon />
                                </IconButton>
                              </>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={team.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default Team;
