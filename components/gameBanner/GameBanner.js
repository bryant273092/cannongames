import {GameBannerContainer, GameLogo, ButtonGrid} from './styled'
import {Button} from '../layout';


export const GameBanner = ({background, logo}) => {
    return (
        <GameBannerContainer background={background}>
            <GameLogo src={logo}/>
            <ButtonGrid>
                <Button>Download</Button>
                <Button href={'#Contain'}background={"rgb(0,0,0,0)"}> Learn More</Button>
            </ButtonGrid>
        </GameBannerContainer>
    )
}