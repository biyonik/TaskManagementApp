import {FC, ReactElement} from 'react';
import {ThemeProvider, CssBaseline} from '@mui/material';
import {customTheme} from './theme/customTheme.ts';
import Dashboard from './pages/dashboard/Dashboard.Page.tsx';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
