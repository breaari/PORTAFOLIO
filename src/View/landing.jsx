import { Nav } from '../components/NavBar/Nav'
import { Home } from '../components/Home/Home'
import { AboutMe } from '../components/AboutMe/AboutMe'
import { Expertise } from '../components/Expertise/Expertise'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'
import { Footer } from "../components/Footer/Footer"

export const Landing = () => {
    return (
        <div className='font-squada'>
            <Nav />
            <Home></Home>
            <AboutMe></AboutMe>
            <Expertise></Expertise>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}