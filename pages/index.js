import HOC from '../components/hoc';
import Banner from '../components/banner';



const WrappedComponents = () => {
  return (
    <div>
      <Banner />
      
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
