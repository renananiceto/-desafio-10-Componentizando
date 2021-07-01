import styled from "styled-components"
import Back from '../img/lol.gif'
import Logo from '../img/pngegg.png'
import League from '../img/league.png'

const Container = styled.div`
    background-image: url(${Back});
    height: 100vh;
    background-size: cover;
    background-position: left;
`
const BoxList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    height: 5rem;
    align-items: center;
    background-color: black;
    position: fixed;
    width: 100vw;
    color: white;
    text-transform: uppercase;
`
const List = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    height: 5rem;
    border-bottom: solid black;
    &:hover{
    border-bottom: solid rgb(11,196,226);
    transition: 0.5s;
    }
`

const LogoImg = styled.img`
    width: 40px;
`

const BoxLeague = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export default function Header() {
    return (
        <Container>
            <BoxList>
                <LogoImg src={Logo} alt='logo' />
                <List>Game</List>
                <List>Champions</List>
                <List>Suport</List>
                <List>Downoad</List>
            </BoxList>
            <BoxLeague>
            <img src={ League } alt='league of legends' />
            </BoxLeague>
        </Container>
    )
}

