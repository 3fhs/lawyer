// Theme.js
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#1976d2' : '#90caf9',
      contrastText: mode === 'light' ? '#ffffff' : '#000000',
    },
    secondary: {
      main: mode === 'light' ? '#dc004e' : '#f48fb1',
      contrastText: mode === 'light' ? '#ffffff' : '#000000',
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#121212',
      paper: mode === 'light' ? '#f5f5f5' : '#424242',
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#ffffff',
      secondary: mode === 'light' ? '#7a7a7a' : '#b3b3b3',
    },
    action: {
      active: mode === 'light' ? '#000000' : '#ffffff',
      hover: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
      selected: mode === 'light' ? 'rgba(0, 0, 0, 0.14)' : 'rgba(255, 255, 255, 0.14)',
      disabled: mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)',
      disabledBackground: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
    },
    divider: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
  },
});
