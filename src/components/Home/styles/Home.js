import styled from 'styled-components'

const gray2 = "#565555";

// Fonts
const fontFamily = "'Segoe UI', 'Helvetica Neue',sansserif";
const fontSize = "15px";

export const Container = styled.div`
  width: 100vh;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;



export const ListItem = styled.div`
  grid-template-columns: 200px 200px;
  left: 40px;
  top: 316px;
  margin-top: 10px;
  height: 540px;

  /* Background / White */
  background: #FFFFFF;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  text-align: left;
  margin-left: 10px;
`;

export const Paragraph = styled.h2`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  text-align: left;
  margin-left: 10px;
`;

export const Img = styled.img`
width: 130px;
height: 130px;
top: 291px;
right: 290px;
float: right;

`

export const BadgeGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
`

export const Badge = styled.div`
/* Badge / Grass */
grid-template-columns: 60px 60px;
width: 61px;
height: 25px;
left: 190px;
top: 176px;

/* Type / Grass */
background: ${
  (props) => (props.bgColor === 'grass') ? "#62B957" : 
    (props.bgColor === 'poison') ? "#A552CC" : 
    (props.bgColor === 'fire') ? "#FD7D24" :
    (props.bgColor === 'fairy') ? "#ED6EC7" :
    (props.bgColor === 'bug') ? "#8CB330" :
    (props.bgColor === 'dark') ? "#58575F" :
    (props.bgColor === 'dragon') ? "#0F6AC0" :
    (props.bgColor === 'electric') ? "#EED535" :
    (props.bgColor === 'fighting') ? "#D04164" :
    (props.bgColor === 'flying') ? "#748FC9" :
    (props.bgColor === 'ghost') ? "#556AAE" :
    (props.bgColor === 'ground') ? "#DD7748" : 
    (props.bgColor === 'ice') ? "#61CEC0" : 
    (props.bgColor === 'normal') ? "#9DA0AA" :
    (props.bgColor === 'psychic') ? "#EA5D60" :
    (props.bgColor === 'rock') ? "#BAAB82" :
    (props.bgColor === 'steel') ? "#417D9A" : 
    (props.bgColor === 'water') ? "#4A90DA" : "#000"
};
border-radius: 3px;

/* Pokemon Type */
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: right;

/* Text / White */

color: #FFFFFF;

/* Inside Auto Layout */
margin: 15px;
`

export const Abilities = styled.ul`
list-style-type: decimal
`

export const Ability = styled.li`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 15px;
`

export const Table = styled.table`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 15px;
border: none;
border-collapse: collapse;
td,
th {
  border: none;
}

td {
  padding: 5px 10px;
}
margin: 15px;
`;