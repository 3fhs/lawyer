// Theme.js
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#1976d2' : '#90caf9', // الأزرق للضوء، الأزرق الفاتح للداكن
    },
    secondary: {
      main: mode === 'light' ? '#dc004e' : '#f48fb1', // الأحمر للضوء، الوردي للداكن
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#121212', // اللون الافتراضي للخلفية
      paper: mode === 'light' ? '#f5f5f5' : '#424242', // اللون لخلفية الورق
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#ffffff', // اللون الافتراضي للنص
      secondary: mode === 'light' ? '#7a7a7a' : '#b3b3b3',
    },
  },
});
