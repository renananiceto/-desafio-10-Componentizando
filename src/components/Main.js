import styled from "styled-components"
import MainBack from '../img/backkgraund.png'
import Teemo from '../img/teemo.png'
import Lux from '../img/lux.png'
import Feiora from '../img/feiora.png'

const Container = styled.div`
    background-image: url(${MainBack} );
    height:40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Paragraph = styled.p`
    display: flex;
    width: 30rem;
    text-align: center;
`

const ContainerParagraph = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;
`

const BoxParagraph = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ChampsImg = styled.img`
    width: 200px;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
    transform: scale(120%);
    }
`

export default function Main() {
    return (
        <Container>
            <ContainerParagraph>
                <BoxParagraph>
                    <ChampsImg src={Teemo} alt='' />
                    <Paragraph>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Detraxit consequat et quo num tendi nada. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Delegadis gente finis, bibendum egestas augue arcu ut est.</Paragraph>
                </BoxParagraph>
                <BoxParagraph>
                    <ChampsImg src={Lux} alt='' />
                    <Paragraph>Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Manduma pindureta quium dia nois paga. In elementis mé pra quem é amistosis quis leo. Quem manda na minha terra sou euzis!</Paragraph>
                </BoxParagraph>
                <BoxParagraph>
                    <ChampsImg src={Feiora} alt='' />
                    <Paragraph>Per aumento de cachacis, eu reclamis. Suco de cevadiss deixa as pessoas mais interessantis. Pra lá , depois divoltis porris, paradis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.</Paragraph>
                </BoxParagraph>

            </ContainerParagraph>
        </Container>
    )
}