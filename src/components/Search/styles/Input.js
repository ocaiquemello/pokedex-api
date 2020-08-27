import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
    type: "text"
}))`
    color: palevioletred;
    font-size: 1em;
`

export default Input