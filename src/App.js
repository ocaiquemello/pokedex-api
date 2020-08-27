import React from 'react';

//Styles
import { Title, Description } from './styles/Text'
import { Wrapper, Header } from './styles/Body'
import GlobalStyles from './styles/Global'

//Components
import Input from './components/Search'
import Home from './components/Home'

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>
          <Title>Pokédex</Title>
          <Description>Procure por um Pokémon pelo nome ou utilizando o Número Nacional da Pokédex.</Description>
          <Input />
          <Home />
        </Header>
      </Wrapper>
    </>
  );
}

export default App;
