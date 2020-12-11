import { RapidFireContainer, Video, Element, MediaContainer, Description, Image, RowCont } from './styled';
import { HeaderOne, HeaderTwo, Button, Grid, FlexRow, HeaderThree, FlexColumn } from '../../components/layout';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const weapons = require('../../data/weapons.json')

export const RapidFire = () => {
    return (
        <RapidFireContainer id="Contain">
            <MediaContainer>
                <Element>
                    <HeaderOne>Gameplay</HeaderOne>
                    <Video playsinline autoPlay controls loop>
                        <source type={"video/webm"} src={"/Rapidfire_final_trailer.webm"} />
                    </Video>
                </Element>
                <Element>
                    <HeaderOne >Gallery</HeaderOne>
                    <Carousel style={{ width: "90%", margin: "0px auto", marginBottom: "50px" }}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/lobby.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/homescreen.png"
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
                    <Description>It's always a misery for people who have survived a war. But it is even more disparate when the weapons of mass destruction wipe out 95% of the population on earth. 
                        Now there is contaminated air, soil, and a messed up law of gravity. You are one the few people who survived the events of World War III. You survived the soldiers, the nuclear 
                        weapons, and the gravitation bombs.The real challenge comes after the war; with the world now lacking social order and law enforcement. By gathering all resources in the city
                         ruins, you have to fight for survival. The only thing can protect you is your weapon. Take your guns and be the last one standing!


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
                        Fight for resources and eliminate the other player and be the last one standing to win 
                        the round. Players who win the most rounds win the match.

                    </Description>
                </Element>

            </MediaContainer>
            <MediaContainer>
                <FlexColumn>
                    <HeaderTwo style={{ color: "rgb(255, 255, 255)" }}>Features</HeaderTwo>
                    <RowCont>
                        <FlexColumn>
                            <HeaderThree color={'rgb(0, 0, 255)'}>Fast Paced</HeaderThree>
                            <Description color={'white'}>Rapid Fire is a perfect party game. Grab a friend and find out who can be the last one standing the post apocalypse world. </Description>
                        </FlexColumn>
                        <FlexColumn>
                            <HeaderThree color={'rgb(0, 0, 255)'}>Destructible Terrain</HeaderThree>
                            <Description color={'white'}>In the game, you can destroy almost everything. You can destroy objects that your opponent is trying to hide behind. You can create a pathway that didn’t exist before. You even can make your opponents fall to the death.</Description>
                        </FlexColumn>
                        <FlexColumn>
                            <HeaderThree color={'rgb(0, 0, 255)'}>Unique Weapons</HeaderThree>
                            <Description color={'white'}>During battle, different weapons will spawn in the battlefield. And they provide not only more damage but also unique playstyles.</Description>
                        </FlexColumn>
                    </RowCont>
                </FlexColumn>
            </MediaContainer>
            <MediaContainer color={'rgb(255,255,255, .7)'}>

                <Element style={{ width: "100%" }}>
                    <HeaderTwo style={{ color: "rgb(0, 0, 255)" }}>Weapons</HeaderTwo>
                    <Grid>
                        {weapons.map((weapon) => (
                            <Element style={{ width: "80%"}}>
                                <Image style={{ width: '100%', margin:"0px"}}src={weapon.href}/>
                                <HeaderThree color={'white'}>{weapon.weapon}</HeaderThree>
                                <ul>
                                    {weapon.description.map((item) => (
                                        <li><Description style={{margin: '10px auto'}}>{item}</Description></li>
                                    ))}
                                </ul>
                            </Element>
                        ))}
                    </Grid>
                </Element>
            </MediaContainer>
            
            <HeaderOne style={{ marginTop: "75px" }}>Get The Game</HeaderOne>
            <Button style={{marginBottom: "75px"}}> Download Now</Button>




        </RapidFireContainer >
    )
}