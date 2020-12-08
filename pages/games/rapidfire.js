import HOC from '../../components/hoc';
import GameBanner from '../../components/gameBanner';
import RapidFire  from '../../components/rapidFire'

const WrappedComponents = () => {
  return (
    <>
      <GameBanner />
      <RapidFire />

    </>

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