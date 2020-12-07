import { GridContainer, GameContainer, GameGrid, Heading, Image, LogoImage} from './styled';


export const GamesGrid = () => {
    return (
        <GridContainer>
            <GameGrid>
                
                    <GameContainer>
                        <LogoImage src={"/rapid.webp"} />
                        <Image src={"https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5faaf1082bc78508e5d95f16_main-qimg-c5a69e2769af2a0886ff2749c569bc95.jpeg"}></Image>
                    </GameContainer>
                
                    <GameContainer >
                        <LogoImage src={"/vaccineracelogo.webp"} />
                        <Image src={"vrace_background.webp"}/>
                    </GameContainer>

                

            </GameGrid>


        </GridContainer>)
}