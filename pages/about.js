import HOC from '../components/hoc';


const WrappedComponents = () => {
  return (
    <div>
      <html lang="en-US" />
      
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