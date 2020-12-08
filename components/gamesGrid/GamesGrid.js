import { GridContainer, GameContainer, GameGrid, Heading, Image, LogoImage } from './styled';
import { Button } from '../layout'


export const GamesGrid = () => {
    return (
        <GridContainer>
            <GameGrid>
                <GameContainer>
                    <LogoImage src={"/rapid.webp"} />
                    <a href={'games/rapidfire'}>
                        <Image src={"https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5faaf1082bc78508e5d95f16_main-qimg-c5a69e2769af2a0886ff2749c569bc95.jpeg"} />
                    </a>
                    <Button href={'games/rapidfire'}>Play Rapid Fire</Button>
                </GameContainer>
                <GameContainer >
                    <LogoImage src={"/vaccineracelogo.webp"} />
                    <a href={'games/vaccinerace'}>
                        <Image src={"vrace_background.webp"} />
                    </a>
                    <Button href={'games/vaccinerace'}>Play Vaccine Race</Button>
                </GameContainer>



            </GameGrid>


        </GridContainer>)
}