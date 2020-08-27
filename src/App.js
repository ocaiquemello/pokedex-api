import React from 'react';

//Styles
import { Title, Description } from './styles/Text'
import { Wrapper, Header } from './styles/Body'
import GlobalStyles from './styles/Global'

//Components
import Home from './components/Home'

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>
          <Title>Pokédex</Title>
          <Description>Procure por todos os Pokémons e suas evoluções direto da PokéAPI!</Description>
          <Home />
        </Header>
      </Wrapper>
    </>
  );
}

export default App;
