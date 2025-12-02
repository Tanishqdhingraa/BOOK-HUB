
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Foot from "../components/Foot"
import MovingBanner from '../components/MovingBanner'
import Authors from '../components/Authors'
import BookJourneyBanner from '../components/BookJourneyBanner'
import Freebooks from '../components/Freebooks'
import Credits from '../components/Credits'
import Chatbot from '../components/Chatbot'


const Home = () => {
  return (
     <>
      <Navbar />
     <Chatbot/>
      <Banner />
       <MovingBanner />
      <BookJourneyBanner />
      <Authors />
      <Freebooks />
      
      <Foot/>
      <Credits/>
    </>
  )
}

export default Home
