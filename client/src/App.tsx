import {FC, ReactElement} from 'react';
import {ThemeProvider, CssBaseline} from '@mui/material';
import {customTheme} from './theme/customTheme.ts';
import Dashboard from './pages/dashboard/dashboard.page.tsx';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
