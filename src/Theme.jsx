export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // قيم الألوان في وضع الإضاءة
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#ff4081',
          },
          background: {
            default: '#ffffff',
            paper: '#f5f5f5',
          },
        }
      : {
          // قيم الألوان في الوضع الداكن
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#f48fb1',
          },
          background: {
            default: '#121212',
            paper: '#1d1d1d',
          },
        }),
  },
});
