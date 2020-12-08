import {GameBannerContainer, GameLogo, ButtonGrid} from './styled'
import {Button} from '../layout';


export const GameBanner = () => {
    return (
        <GameBannerContainer >
            <GameLogo src={'/rapid.webp'}/>
            <ButtonGrid>
                <Button>Download</Button>
                <Button background={"rgb(0,0,0,0)"}> Learn More</Button>
            </ButtonGrid>
        </GameBannerContainer>
    )
}