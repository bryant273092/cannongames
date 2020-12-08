import { RapidFireContainer, Video, Element, MediaContainer, Description, Image } from './styled';
import { HeaderOne, HeaderTwo, Button } from '../../components/layout';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


export const RapidFire = () => {
    return (
        <RapidFireContainer>
            <MediaContainer>
                <Element>
                    <HeaderOne>Gameplay</HeaderOne>
                    <Video autoPlay controls loop>
                        <source type={"video/webm"} src={"https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5f84f6ffc0babdb176d65448_new-transcode.webm"} />
                    </Video>
                </Element>
                <Element>
                    <HeaderOne >Gallery</HeaderOne>
                    <Carousel style={{ width: "80%", margin: "0px auto", marginBottom: "50px" }}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5faaf1082bc78508e5d95f16_main-qimg-c5a69e2769af2a0886ff2749c569bc95.jpeg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5faaf1082bc78508e5d95f16_main-qimg-c5a69e2769af2a0886ff2749c569bc95.jpeg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5faaf1082bc78508e5d95f16_main-qimg-c5a69e2769af2a0886ff2749c569bc95.jpeg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Element>
            </MediaContainer>
            <MediaContainer>
                <Element>
                    <HeaderTwo style={{ color: "rgb(0, 0, 255)" ,}}> Story Line</HeaderTwo>
                    <Description>In World War III, humans developed many weapons
                    of mass destruction. 95% of the population is wiped out. Gravitational weapons messed up the law of nature.
                    5 years after the war, a few survivors compete for resources to live. In the world without law enforcement,
                    the only thing can protect you is your gun.
                    </Description>
                </Element>
                    <Image src={'https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5faaf1082bc78508e5d95f16_main-qimg-c5a69e2769af2a0886ff2749c569bc95.jpeg'} />
            </MediaContainer>
            <HeaderOne style={{marginTop: "75px"}}>Get The Game</HeaderOne>
            <Button> Download Now</Button>


        </RapidFireContainer>
    )
}