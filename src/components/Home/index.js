import React, { useState, useEffect } from 'react';

import { Container, ListItem, Title, Img, Badge, BadgeGrid, Abilities, Ability, Paragraph, Table } from './styles/Home'

function Home() {
     
  const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState('true');
  const arr = [];
  
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
        .then((response) => response.json())
        .then((data) => setResult(
            data.results.map((item) => {
                fetch(item.url)
                .then((response) => response.json())
                .then((allpokemon) => arr.push(allpokemon));
                setPoke(arr);
            }),
        ));
    }, []);

    setTimeout(() => {
        setLoad(false);
        console.log(poke)
    }, 1000);
 
    return (
        <Container>
            {poke.map((img, i) => (
                <ListItem id={img.id} key={img.id}>
                    <Title>{img.name.charAt(0).toUpperCase() + img.name.slice(1)}</Title>
                    <BadgeGrid>
                        {img.types.map(premise => (
                            <Badge bgColor={premise.type.name}>{premise.type.name.charAt(0).toUpperCase() + premise.type.name.slice(1)}</Badge>
                        ))}
                    </BadgeGrid>
                    <Img src={img.sprites.front_default} alt={img.name} />
                    <Paragraph>Abilities</Paragraph>
                    <Abilities>
                        {img.abilities.map(premise => (
                            <Ability>{premise.ability.name.charAt(0).toUpperCase() + premise.ability.name.slice(1)} {premise.is_hidden === true ? '(hidden)' : '' }</Ability>
                        ))}
                    </Abilities>
                    <Paragraph>Attributes</Paragraph>
                    <Table>
                        <colgroup>
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <tbody>
                            {img.stats.map((item, index) => (
                                <tr key={index}>
                                    {item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)}
                                    <td key={index}>{item.base_stat}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </ListItem>
            ))}
        </Container>
    );
}
  
export default Home;