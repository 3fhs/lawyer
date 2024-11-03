import * as React from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import DashNavTop from 'componentes/dash-board-component/dash-home/DashNavTop';
import DashSideLeft from 'componentes/dash-board-component/dash-home/DashSideLeft';
import { Outlet } from 'react-router-dom';
import { getDesignTokens } from '../../Theme';
import { useDispatch, useSelector } from 'react-redux';
import { infoApiFetch } from '../../redux/apiCalls/infoApiCall';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function DashBoard() {

  const dispatch = useDispatch();
  const {information} = useSelector(state => state.info);

  React.useEffect(() => {
    dispatch(infoApiFetch)
  }, [dispatch])

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  //dark mode
  const [mode, setMode] = React.useState(localStorage.getItem('currentMode'));
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)),[mode]); 
  //end dark mode

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', direction:'ltr' }}>
        <CssBaseline />

        <DashNavTop info={information} handleDrawerOpen={handleDrawerOpen} open={open} theme={theme} setMode={setMode} />

        <DashSideLeft info={information} handleDrawerClose={handleDrawerClose} open={open} theme={theme} />
        
        {/* this is the side show all links */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
