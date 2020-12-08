import { RapidFireContainer, Video, Element, MediaContainer, Description, Image } from './styled';
import { HeaderOne, HeaderTwo, Button, Grid, FlexRow, HeaderThree } from '../../components/layout';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';



export const RapidFire = () => {
    return (
        <RapidFireContainer id="Contain">
            <MediaContainer>
                <Element>
                    <HeaderOne>Gameplay</HeaderOne>
                    <Video autoPlay controls loop>
                        <source type={"video/webm"} src={"https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5f84f6ffc0babdb176d65448_new-transcode.webm"} />
                    </Video>
                </Element>
                <Element>
                    <HeaderOne >Gallery</HeaderOne>
                    <Carousel style={{ width: "90%", margin: "0px auto", marginBottom: "50px" }}>
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
                                src="/map_paris.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Element>
            </MediaContainer>
            <MediaContainer color={'rgb(255,255,255, 0.5)'}>
                <Element>
                    <HeaderTwo style={{ color: "rgb(0, 0, 255)" }}> Story</HeaderTwo>
                    <Description>During World War III, humans developed many weapons
                    of mass destruction. As a result 95% of the population is wiped out from earth. Gravitational weapons messed with the laws of physics resulting in some weird occurences.
                    5 years after the war, a few survivors compete for resources to continue living. In a world without law enforcement,
                    your only protection is your gun.
                    </Description>
                </Element>
                <Image src={'/map_paris.png'} />
            </MediaContainer>
            <MediaContainer color={'rgb(255,255,255, 1)'}>
                <Image style={{ width: "20%" }} src={'/blue_character.png'} />
                <Image style={{ width: "20%" }} src={'/red_character.png'} />
                <Element>
                    <HeaderTwo style={{ color: "rgb(0, 0, 255)" }}> Multiplayer</HeaderTwo>
                    <Description>
                        Grab a friend to play with! Rapid Fire offers the ability to play with a second player.
                        Eliminate the other player and be the last one standing to win the round. Players who wins the most rounds win the match.

                    </Description>
                </Element>

            </MediaContainer>
            {/* <MediaContainer color={'rgb(255,255,255, 1)'}>

                <Element style={{ width: "100%" }}>
                    <HeaderTwo style={{ color: "rgb(0, 0, 255)" }}>Weapons</HeaderTwo>
                    <Grid>
                        <Element>
                            <Image style={{ width: "100%" }} src={'/machine_gun.png'} />
                            <HeaderThree>Machine Gun</HeaderThree>
                        </Element>
                        <Element>
                            <Image style={{ width: "100%" }} src={'/pistol.png'} />
                            <HeaderThree>Pistol</HeaderThree>
                        </Element>
                        <Element>
                            <Image style={{ width: "100%" }} src={'/rocket.png'} />
                            <HeaderThree>Rocket Launcher</HeaderThree>
                        </Element>
                        <Element>
                            <Image style={{ width: "100%" }} src={'/shotgun.png'} />
                            <HeaderThree>Shotgun</HeaderThree>
                        </Element>
                    </Grid>


                </Element>

            </MediaContainer> */}

            <HeaderOne style={{ marginTop: "75px" }}>Get The Game</HeaderOne>
            <Button style={{marginBottom: "75px"}}> Download Now</Button>




        </RapidFireContainer >
    )
}