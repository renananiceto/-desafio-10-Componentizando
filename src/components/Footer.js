import styled from "styled-components"

const ContainerList = styled.ul`
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    list-style: none;
    text-transform: uppercase;
    font-weight: bold;
    height: 10vh;
    ` 
const BoxList = styled.li`
    cursor: pointer;
    color: rgb(88,88,88);
    transition: 0.5s;
    &:hover{
        color: white;
    }
` 
const imgAlistar = styled.img`
    width: 10rem;
`
export default function Footer(){
    return(
        <div>
            <ContainerList>
                <BoxList>server status</BoxList>
                <BoxList> help us improve</BoxList>
                <BoxList>Suport</BoxList>
                <BoxList>espots pro site</BoxList>
            </ContainerList>
        </div>
    )
}