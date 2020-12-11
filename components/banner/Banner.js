import { BannerContainer, BannerText, BannerButtonGrid, BannerButton, ImageContainer, Image, Video, Source, OverlayContent } from './styled';

export const Banner = () => {
    return (
        <BannerContainer>
            <OverlayContent>
                <ImageContainer>
                    <Image style={{
                        
                    }}alt="cannon_logo" src={'rapid.webp'} />   
                </ImageContainer>
                <BannerText>Available Now</BannerText>
                <BannerButtonGrid>
                    <BannerButton title="Play Cannon Games' Rapid Fire Game" href='/games/rapidfire'>Play</BannerButton>
                </BannerButtonGrid>           
            </OverlayContent>
        </BannerContainer>
    )
}