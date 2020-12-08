import { GridContainer, GameContainer, GameGrid, Heading, Image, LogoImage } from './styled';
import { Button } from '../layout'


export const GamesGrid = () => {
    return (
        <GridContainer>
            <GameGrid>
                <GameContainer>
                    <LogoImage src={"/rapid.webp"} />
                    <a href={'games/rapidfire'}>
                        <Image src={"/map_paris.png"} />
                    </a>
                    <Button href={'games/rapidfire'}>Play Rapid Fire</Button>
                </GameContainer>
                <GameContainer >
                    <LogoImage src={"/vaccineracelogo.webp"} />
                    <a href={'games/vaccinerace'}>
                        <Image src={"vrace_background.webp"} />
                    </a>
                    <Button background={'#bda5b1'} border={'solid 6px #bda5b1'} href={'games/vaccinerace'}>Play Vaccine Race</Button>
                </GameContainer>



            </GameGrid>


        </GridContainer>)
}