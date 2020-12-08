import HOC from '../../components/hoc';


const WrappedComponents = () => {
  return (
    <div>
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