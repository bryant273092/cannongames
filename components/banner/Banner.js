import { BannerContainer, BannerText, BannerButtonGrid, BannerButton, ImageContainer, Image, Video, Source, OverlayContent } from './styled';

export const Banner = () => {
    return (
        <BannerContainer>
            <Video autoPlay>
                <Source type={"video/webm"} src={"https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5f84f6ffc0babdb176d65448_new-transcode.webm"} />
                <Source type={"image/webp"} src={"url(/background.webp)"} />
            </Video>
            <OverlayContent>
                <ImageContainer>
                    <Image style={{
                        
                    }}alt="cannon_logo" src={'rapid_fire_logo_white.webp'} />   
                </ImageContainer>
                <BannerText>Available Now</BannerText>
                <BannerButtonGrid>
                    <BannerButton title="Play Cannon Games' Rapid Fire Game" href='/games/rapidfire'>Play</BannerButton>
                </BannerButtonGrid>

                
            </OverlayContent>



        </BannerContainer>
    )
}