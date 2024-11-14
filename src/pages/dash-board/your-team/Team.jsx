import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teamApi, addLawyerApiWithImage, updateLawyerApiWithImage, deleteLawyerApi } from '../../../redux/apiCalls/TeamApiCall';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';

const columns = [
  { id: 'name', label: 'الاسم', minWidth: 170, align: 'center' },
  { id: 'work', label: 'المهنة', minWidth: 100, align: 'center' },
  { id: 'deg', label: 'درجة القيد', minWidth: 170, align: 'center' },
  { id: 'image', label: 'صورة', minWidth: 170, align: 'center' },
  { id: 'settings', label: 'اعدادات', minWidth: 170, align: 'center' },
];

function Team() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { team } = useSelector(state => state.team);

  const [open, setOpen] = useState(false);
  const [newMember, setNewMember] = useState({ id: '', name: '', work: '', deg: '', imageFile: null });

  useEffect(() => {
    dispatch(teamApi());
  }, [dispatch]);

  const handleClickOpen = () => {
    setNewMember({ id: '', name: '', work: '', deg: '', imageFile: null }); // Reset form when adding new member
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // إرسال FormData عند إضافة أو تعديل عضو
  const handleAddMember = () => {
    const formData = new FormData();
  
    formData.append('name', newMember.name);
    formData.append('work', newMember.work);
    formData.append('deg', newMember.deg);
    if (newMember.imageFile) {
      formData.append('image', newMember.imageFile);
    }
  
    if (newMember.id) {
      // تعديل عضو
      dispatch(updateLawyerApiWithImage(newMember.id, formData));
    } else {
      // إضافة عضو جديد
      dispatch(addLawyerApiWithImage(formData));
    }
  
    handleClose();
  };
  
  



  const handleDeleteMember = (id) => dispatch(deleteLawyerApi(id));

// عند تعديل العضو
const handleEditMember = (id) => {
  const member = team.find((member) => member.id === id); // ابحث عن العضو
  setNewMember({
    id: member.id,
    name: member.name,
    work: member.work,
    deg: member.deg,
    imageFile: null // لا تقم بتحميل الصورة القديمة، اذا أردت تعديلها ستحتاج لتحميلها مجددًا
  });
  setOpen(true); // فتح نافذة الحوار مع بيانات العضو
};

  return (
    <div className='profile'>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', flexDirection: 'row-reverse'}}>
        <h1> بيانات العاملين بالمكتب </h1>
        <AddIcon sx={{color: "#1f9fff", cursor: "pointer"}} onClick={handleClickOpen} />
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {team.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell style={{textAlign:'center'}} key={column.id} align={column.align}>
                        {column.id === 'image' ? (
                          <img 
                            src={value} 
                            alt={row.name} 
                            width={50} 
                            style={{
                              height: '50px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              position: 'relative',
                              left: '50%',
                              transform: 'translateX(-50%)'
                            }} 
                          />
                        ) : column.id === 'settings' ? (
                          <>
                            <IconButton color="primary" aria-label="edit" onClick={() => handleEditMember(row.id)}><EditIcon /></IconButton>
                            <IconButton color="secondary" aria-label="delete" onClick={() => handleDeleteMember(row.id)}><DeleteIcon /></IconButton>
                          </>
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
      {/* نافذة الحوار لإضافة أو تعديل عضو */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{newMember.id ? 'تعديل عضو' : 'إضافة عضو جديد'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="الاسم"
            fullWidth
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="المهنة"
            fullWidth
            value={newMember.work}
            onChange={(e) => setNewMember({ ...newMember, work: e.target.value })}
          />
          <TextField
            margin="dense"
            label="درجة القيد"
            fullWidth
            value={newMember.deg}
            onChange={(e) => setNewMember({ ...newMember, deg: e.target.value })}
          />
          <TextField
            margin="dense"
            type="file"
            accept="image/*"
            fullWidth
            onChange={(e) => setNewMember({ ...newMember, imageFile: e.target.files[0] })}
          />
        </DialogContent>
        <DialogActions sx={{ fontSize: '18px' }}>
          <Button sx={{ color: theme.palette.error.light, fontSize: '18px' }} onClick={handleClose}>
            إغلاق
          </Button>
          <Button sx={{ color: theme.palette.success.main, fontSize: '18px' }} onClick={handleAddMember}>
            {newMember.id ? 'تعديل' : 'إضافة'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Team;
