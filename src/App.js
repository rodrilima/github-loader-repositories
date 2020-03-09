import React from 'react';

import Routes from './routes'
import GlobalStyle from './styles/global'

import PageTitle from './components/PageTitle'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <PageTitle>Github Loader Repositories</PageTitle>
      <Routes />
      <GlobalStyle />
      <Footer>
        Develop by: <a rel="noopener noreferrer" target='_blank' href='https://github.com/rodrilima/github-loader-repositories'>Rodrigo Lima</a>
      </Footer>
    </>
  );
}

export default App;
