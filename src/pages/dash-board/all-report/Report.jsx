import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { reportApi } from '../../../redux/apiCalls/ReportApiCall';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';

function Report() {
  const dispatch = useDispatch();
  const { report } = useSelector(state => state.report);

  const [checked, setChecked] = React.useState([]);

  React.useEffect(() => {
    dispatch(reportApi());
  }, [dispatch]);

  const handleToggle = (id) => () => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className='profile'>
      <div style={{display:'flex', alignItems:'center',justifyContent:'center', gap:'10px', width:'100%', flexDirection:'row-reverse'}}>
        <h1>التقارير القانونية</h1>
        <AddIcon sx={{color:"#1f9fff", cursor:"pointer"}}/>
      </div>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {report.map((item) => {
          const labelId = `checkbox-list-label-${item.id}`;

          return (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(item.id)} dense>
                <Avatar src={item.image} alt={item.name} sx={{ marginRight: 2 }} />
                <ListItemText
                  id={labelId}
                  primary={item.name}
                  secondary={item.port}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default Report;
