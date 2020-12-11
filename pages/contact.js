import HOC from '../components/hoc';
import ContactForm from '../components/contactForm';

const WrappedComponents = () => {
  return (
    <div>
        <ContactForm />
      
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