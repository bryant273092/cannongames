import {BannerContainer, BannerHeader, BannerText, BannerButtonGrid, BannerButton, ImageFilter, ImageContainer, Image} from './styled';

export const Banner = () => {
    return(
        <BannerContainer>
            <video autoPlay>
                <source type={"video/webm"}src={"https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5f84f6ffc0babdb176d65448_new-transcode.webm"}/>
            </video>
            <ImageFilter>
                <ImageContainer>
                    <Image alt="Taco Nacion Logo" src={'cannon_logo.png'}/>
                </ImageContainer>
                
                <BannerText>Authentic Mexican Food</BannerText>
                <BannerButtonGrid>
                    <BannerButton title="View Menu for Taco Nacion"href='/menu'>View Menu</BannerButton>
                </BannerButtonGrid>
            </ImageFilter>
        </BannerContainer>
    )
}