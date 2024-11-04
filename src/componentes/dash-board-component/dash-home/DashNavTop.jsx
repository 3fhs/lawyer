import { Box, IconButton, Toolbar } from '@mui/material';
import { styled , alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';

// start search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
//end search

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

function DashNavTop({handleDrawerOpen, open , theme, setMode, info}) {

  return (
    <AppBar position="fixed" open={open}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
            {
                marginRight: 5,
            },
            open && { display: 'none' },
            ]}
        >
            <MenuIcon />
        </IconButton>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            
            <Box flexGrow={1}/>

            <Stack direction="row">
              
                  {theme.palette.mode === "light" ?  
                    <IconButton color='inherit'  onClick={() => {
                      localStorage.setItem('currentMode', theme.palette.mode === 'dark' ? 'light' : 'dark')
                      setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')}}
                    >
                      <LightModeIcon/> 
                    </IconButton> 
                    : 
                    <IconButton onClick={() => {
                      localStorage.setItem('currentMode', theme.palette.mode === 'dark' ? 'light' : 'dark')
                      setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')}}
                    >
                      <BedtimeOutlinedIcon/> 
                    </IconButton>
                  }
                    
  
              <IconButton color='inherit' component={Link} to='/'>
                <HomeIcon />
              </IconButton>
              <IconButton color='inherit'>
                <NotificationsNoneOutlinedIcon/>
              </IconButton>
              <IconButton color='inherit'>
                <SettingsOutlinedIcon />
              </IconButton>
              <IconButton color='inherit'>
                <img src={info.photo} alt='my name' style={{width:'30px', height:'30px', borderRadius:'50%'}}/>
              </IconButton>
            </Stack>

        </Toolbar>
    </AppBar>
  )
}

export default DashNavTop