import Navbar      from '../components/Navbar/Navbar'
import Hero        from '../components/Hero/Hero'
import Problem     from '../components/Problem/Problem'
import Solution    from '../components/Solution/Solution'
import HowItWorks  from '../components/HowItWorks/HowItWorks'
import Metrics     from '../components/Metrics/Metrics'
import Team        from '../components/Team/Team'
import Contact     from '../components/Contact/Contact'
import Footer      from '../components/Footer/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Metrics />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
