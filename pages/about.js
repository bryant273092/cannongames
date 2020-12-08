import HOC from '../components/hoc';
import UserCredits from '../components/userCredits'

const WrappedComponents = () => {
  return (
    <div>
      <UserCredits />
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