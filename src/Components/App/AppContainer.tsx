import React from 'react';
import { graphql } from 'react-apollo';
import reset from 'styled-reset';
import theme from '../../theme';
import { injectionGlobal, ThemeProvider } from '../../typed-components';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries';

// tslint:disable-next-level
injectionGlobal`
  ${reset}
`;

const AppContainer = ({ data }) => (
  <ThemeProvider theme={theme}>
    <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
  </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer as any);
