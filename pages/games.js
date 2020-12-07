import HOC from '../components/hoc';
import GamesGrid from '../components/gamesGrid';


const WrappedComponents = () => {
  return (
      <GamesGrid />
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