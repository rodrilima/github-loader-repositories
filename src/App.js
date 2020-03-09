import React from 'react';

import Routes from './routes'
import GlobalStyle from './styles/global'

import PageTitle from './components/PageTitle'

function App() {
  return (
    <>
      <PageTitle>Github Loader Repositories</PageTitle>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
