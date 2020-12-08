import HOC from '../../components/hoc';
import { GameBannerContainer, GameLogo, ButtonGrid} from '../../components/gameBanner/styled';
import { Button, HeaderOne , Text, Image} from '../../components/layout';


const WrappedComponents = () => {
  return (
    <div>
      <GameBannerContainer background={'url(/vrace_background.webp)'}>
        <GameLogo style={{marginBottom: "50px"}}src={'/vaccineracelogo.webp'} />
      </GameBannerContainer>
      <div style={{
        backgroundColor: "white",
        height: "auto",
        display: "flex",
        flexDirection: 'column',
        paddingBottom: '50px'
      }}>
        <ButtonGrid style={{marginTop: "0px"}}>
          <Button background={'#bda5b1'} border={'solid 6px #bda5b1'} href={'/vaccine_race_game.zip'} download>Download Game</Button>
          <Button color={'#bda5b1'}background={'rgb(0,0,0,0)'} border={'solid 6px #bda5b1'} href={'/game_documentation.pdf'}>Game Manual</Button>
        </ButtonGrid>
        <HeaderOne color={'#bda5b1'}>Summary</HeaderOne>
        <Text color={'gray'} decoration={'none'}>Vaccine Race is a board game that challenges players to develop and produce a vaccine for COVID-19. 
          Players will be one of the vaccine companies racing with not only the deadly virus, but also other competitors. 
          There are many events during the process to speed it up or slow it down. 
          Only the first player who reaches the goal overcoming all challenges along the way wins. </Text>
        <Image src={'/vrace_background.webp'} />
      </div>


    </div>
  )
}
export default function Home() {

  const Page = HOC(WrappedComponents)
  return (
    <>
      <Page />
    </>
  )
}