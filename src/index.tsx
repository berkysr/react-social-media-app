import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '@base/index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '@base/App';
import '@base/i18n';
import { store } from '@base/store';
import Loading from '@components/shared/Loading';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
            <App />
            <Analytics />
            <SpeedInsights />
          </GoogleOAuthProvider>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);
