import { FC, ReactElement } from 'react';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme.ts';
import Dashboard from './pages/dashboard/Dashboard.Page.tsx';
import ComposeContext from './context/Compose.context.tsx';
import { rootContext } from './context/root.context.ts';



const App: FC = (): ReactElement => {
  return (
    <ComposeContext components={rootContext}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </ComposeContext>
  );
};

export default App;
